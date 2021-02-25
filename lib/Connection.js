const EventEmitter = require('events');

const BufferList = require('bl');

const { varint } = require('protocol-buffers-encodings');

const UnableToParseRequestError = require('./errors/UnableToParseRequestError');
const ResponseExceptionError = require('./errors/ResponseExceptionError');
const MaxRequestSizeError = require('./errors/MaxRequestSizeError');
const EmptyRequestError = require('./errors/EmptyRequestError');

const {
  tendermint: {
    abci: {
      Request,
      Response,
    },
  },
} = require('../types.js');

class Connection extends EventEmitter {
  /**
   * @param {number} id
   * @param {Socket} socket
   * @param {Function} handleRequest
   */
  constructor(id, socket, handleRequest) {
    super();

    this.id = id;
    this.socket = socket;
    this.handleRequest = handleRequest;
    this.readerBuffer = new BufferList();
    this.isReading = false;
    this.isClosing = false;
    this.isRequestHandled = Promise.resolve();

    this.socket.on('data', (data) => {
      this.readerBuffer.append(data);

      // noinspection JSIgnoredPromiseFromCall
      this.readNextRequest();
    });
  }

  /**
   * Write response to socket
   *
   * @param {Response} response
   */
  async write(response) {
    const responseBuffer = Response.encode(response).finish();
    const responseLengthBuffer = Buffer.from(
      // eslint-disable-next-line no-bitwise
      varint.encode(responseBuffer.length << 1),
    );

    // Write to memory
    this.socket.cork();

    try {
      this.socket.write(responseLengthBuffer);
      this.socket.write(responseBuffer);
    } finally {
      this.socket.uncork();
    }
  }

  /**
   * Close connection
   *
   * @return {Promise<void>}
   */
  async close() {
    this.isClosing = true;

    this.socket.pause();

    await Promise.race([
      this.isRequestHandled,
      new Promise((resolve) => this.socket.once('close', resolve)),
    ]);

    return new Promise((resolve) => {
      this.socket.end(resolve);
    });
  }

  /**
   * @private
   * @return {Promise<void>}
   */
  async readNextRequest() {
    // Do not read next request if connection is closing or request already reading
    if (this.isClosing || this.isReading) {
      return;
    }

    this.isReading = true;

    let resolveRequestHandled = () => {};
    this.isRequestHandled = new Promise((resolve) => {
      resolveRequestHandled = resolve;
    });

    // Parse request
    let requestLength;
    try {
      // eslint-disable-next-line no-bitwise
      requestLength = varint.decode(this.readerBuffer.slice(0, 8)) >> 1;
    } catch (e) {
      // buffering message, don't read yet
      this.isReading = false;
      resolveRequestHandled();

      return;
    }

    const varintLength = varint.decode.bytes;

    if (requestLength === 0) {
      // noinspection ExceptionCaughtLocallyJS
      this.socket.destroy(new EmptyRequestError());

      return;
    }

    if (requestLength > Connection.MAX_MESSAGE_SIZE) {
      this.socket.destroy(new MaxRequestSizeError(Connection.MAX_MESSAGE_SIZE));

      return;
    }

    if (varintLength + requestLength > this.readerBuffer.length) {
      // buffering message, don't read yet
      this.isReading = false;
      resolveRequestHandled();

      return;
    }

    const messageBytes = this.readerBuffer.slice(
      varintLength,
      varintLength + requestLength,
    );

    let request;
    try {
      request = Request.decode(messageBytes);
    } catch (e) {
      const requestBuffer = this.readerBuffer.slice(0, messageBytes);

      const error = new UnableToParseRequestError(e, requestBuffer);

      this.socket.destroy(error);

      return;
    }

    this.readerBuffer.consume(varintLength + requestLength);

    // Do not read new data from socket since we handling request
    // and writing response
    this.socket.pause();

    // Handle request
    let response;
    try {
      response = await this.handleRequest(request);
    } catch (handlerError) {
      if (handlerError instanceof ResponseExceptionError) {
        let emitError;

        try {
          await this.write(handlerError.getResponse());
        } catch (writeError) {
          emitError = writeError;
        }

        // Do not emit connection error if write is successful
        this.socket.destroy(emitError);

        return;
      }

      throw handlerError;
    }

    // Write response
    try {
      await this.write(response);
    } catch (e) {
      this.socket.destroy(e);

      return;
    }

    this.isReading = false;
    resolveRequestHandled();

    if (!this.isClosing) {
      this.socket.resume();
    }

    // Read more requests if available
    if (this.readerBuffer.length > 0) {
      // noinspection JSIgnoredPromiseFromCall,ES6MissingAwait
      this.readNextRequest();
    }
  }
}

Connection.MAX_MESSAGE_SIZE = 104857600; // 100mb;

module.exports = Connection;
