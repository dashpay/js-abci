const { promisify } = require('util');

const EventEmitter = require('events');

const BufferList = require('bl');

const { varint } = require('protocol-buffers-encodings');

const UnableToParseRequestError = require('./errors/UnableToParseRequestError');
const ResponseExceptionError = require('./errors/ResponseExceptionError');
const MaxRequestSizeError = require('./errors/MaxRequestSizeError');

const {
  tendermint: {
    abci: {
      Request,
      Response,
    },
  },
} = require('../types.js');

const MAX_MESSAGE_SIZE = 104857600; // 100mb

class Connection extends EventEmitter {
  /**
   * @param {Socket} socket
   * @param {Function} handleRequest
   */
  constructor(socket, handleRequest) {
    super();

    this.socket = socket;
    this.handleRequest = handleRequest;
    this.readerBuffer = new BufferList();
    this.isReadingRequest = false;

    this.writeAndFlush = promisify(this.socket.write.bind(socket));

    this.socket.on('data', this.onData.bind(this));
  }

  /**
   * Write response to socket
   *
   * @param {Response} response
   * @param {boolean} [forceFlush=false]
   * @return {Promise<boolean>}
   */
  async write(response, forceFlush = false) {
    const responseBuffer = Response.encode(response).finish();
    const responseLengthBuffer = Buffer.from(
      // eslint-disable-next-line no-bitwise
      varint.encode(responseBuffer.length << 1),
    );

    // Write to memory
    this.socket.cork();

    try {
      this.socket.write(responseLengthBuffer);

      if (forceFlush) {
        await this.writeAndFlush(responseBuffer);
      } else {
        this.socket.write(responseBuffer);
      }
    } finally {
      this.socket.uncork();
    }
  }

  /**
   * @private
   * @param {Buffer} data
   * @return {Promise<void>}
   */
  async onData(data) {
    this.readerBuffer.append(data);

    if (this.isReadingRequest || this.socket.destroyed) {
      return;
    }

    this.isReadingRequest = true;

    await this.readNextRequest();

    this.isReadingRequest = false;
  }

  /**
   * @private
   * @return {Promise<void>}
   */
  async readNextRequest() {
    let request;

    // Parse request
    try {
      // eslint-disable-next-line no-bitwise
      const requestLength = varint.decode(this.readerBuffer.slice(0, 8)) >> 1;
      const varintLength = varint.decode.bytes;

      if (requestLength > MAX_MESSAGE_SIZE) {
        this.socket.destroy(new MaxRequestSizeError(MAX_MESSAGE_SIZE));

        return;
      }

      if (varintLength + requestLength > this.readerBuffer.length) {
        // buffering message, don't read yet
        return;
      }

      const messageBytes = this.readerBuffer.slice(
        varintLength,
        varintLength + requestLength,
      );

      this.readerBuffer.consume(varintLength + requestLength);

      request = Request.decode(messageBytes);
    } catch (e) {
      const error = new UnableToParseRequestError(e, this.readerBuffer);

      this.socket.destroy(error);

      return;
    }

    // Handle request
    let response;
    try {
      // Do not read new data from socket since we handling request
      this.socket.pause();

      response = await this.handleRequest(request);

      this.socket.resume();
    } catch (handlerError) {
      if (handlerError instanceof ResponseExceptionError) {
        try {
          await this.write(handlerError.getResponse());
        } catch (writeError) {
          this.socket.destroy(writeError);

          return;
        }

        // Do not emit connection error
        this.socket.destroy();

        return;
      }

      throw handlerError;
    }

    // Write response
    const forceFlush = Boolean(response.flush);

    try {
      await this.write(response, forceFlush);
    } catch (e) {
      this.socket.destroy(e);

      return;
    }

    // Read more requests if available
    if (this.readerBuffer.length > 0) {
      // TODO: Sync or Async?
      await this.readNextRequest();
    }
  }
}

Connection.MAX_MESSAGE_SIZE = MAX_MESSAGE_SIZE;

module.exports = Connection;
