const { DuplexMock } = require('stream-mock');

const { varint } = require('protocol-buffers-encodings');

const fixtures = require('../../lib/test/fixtures');

const Connection = require('../../lib/Connection');
const MaxRequestSizeError = require('../../lib/errors/MaxRequestSizeError');
const UnableToParseRequestError = require('../../lib/errors/UnableToParseRequestError');
const ResponseExceptionError = require('../../lib/errors/ResponseExceptionError');
const EmptyRequestError = require('../../lib/errors/EmptyRequestError');

/**
 *
 * @param {DuplexMock} socketMock
 * @param {...Object} assertFixtures
 */
function assertSocketWrite(socketMock, ...assertFixtures) {
  expect(socketMock.cork.callCount).to.equal(assertFixtures.length);

  expect(socketMock.write.callCount).to.equal(assertFixtures.length * 2);

  assertFixtures.forEach((fixture) => {
    expect(socketMock.write.withArgs(fixture.response.delimiter)).to.be.calledOnce();
    expect(socketMock.write.withArgs(fixture.response.buffer)).to.be.calledOnce();
  });

  expect(socketMock.uncork.callCount).to.equal(assertFixtures.length);
}

describe('Connection', () => {
  let requestHandlerMock;
  let socketMock;
  let connection;
  let originMaxMessageSize;
  let errorHandlerSpy;

  beforeEach(function beforeEach() {
    socketMock = new DuplexMock(null, { objectMode: true });

    this.sinon.spy(socketMock);

    errorHandlerSpy = this.sinon.spy();

    socketMock.on('error', errorHandlerSpy);

    requestHandlerMock = this.sinon.stub();

    // Restore origin size
    if (!originMaxMessageSize) {
      originMaxMessageSize = Connection.MAX_MESSAGE_SIZE;
    } else {
      Connection.MAX_MESSAGE_SIZE = originMaxMessageSize;
    }

    const id = 1;

    connection = new Connection(id, socketMock, requestHandlerMock);
  });

  it('should handle request', () => {
    requestHandlerMock.resolves(fixtures.info.response.object);

    socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

    setImmediate(() => {
      expect(requestHandlerMock).to.be.calledOnceWithExactly(fixtures.info.request.object);

      assertSocketWrite(socketMock, fixtures.info);

      expect(errorHandlerSpy).to.not.be.called();
    });
  });

  it('should handle multiple requests', () => {
    requestHandlerMock.withArgs(fixtures.info.request.object)
      .resolves(fixtures.info.response.object);

    requestHandlerMock.withArgs(fixtures.echo.request.object)
      .resolves(fixtures.echo.response.object);

    socketMock.emit('data', Buffer.concat([
      fixtures.info.request.bufferWithDelimiter,
      fixtures.echo.request.bufferWithDelimiter,
    ]));

    setImmediate(() => {
      assertSocketWrite(socketMock, fixtures.info, fixtures.echo);

      expect(errorHandlerSpy).to.not.be.called();
    });
  });

  it('should not handle next request until the first one is not handled', () => {
    let resolveFirstRequestPromise = () => {};
    const firstRequestPromise = new Promise((resolve) => {
      resolveFirstRequestPromise = resolve;
    });

    requestHandlerMock.withArgs(fixtures.info.request.object)
      .returns(firstRequestPromise);

    requestHandlerMock.withArgs(fixtures.echo.request.object)
      .resolves(fixtures.echo.response.object);

    socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);
    socketMock.emit('data', fixtures.echo.request.bufferWithDelimiter);

    setImmediate(() => {
      expect(socketMock.write).to.not.be.called();

      resolveFirstRequestPromise(fixtures.info.response.object);
    });

    setImmediate(() => {
      assertSocketWrite(socketMock, fixtures.info, fixtures.echo);

      expect(errorHandlerSpy).to.not.be.called();
    });
  });

  it('should destroy socket and emit EmptyRequestError if request is empty', () => {
    socketMock.emit('data', Buffer.alloc(1));

    setImmediate(() => {
      expect(requestHandlerMock).to.not.be.called();
      expect(socketMock.write).to.not.be.called();

      expect(socketMock.destroy).to.be.calledOnce();
      expect(socketMock.destroy.getCall(0).args).to.have.lengthOf(1);

      const [maxSizeError] = socketMock.destroy.getCall(0).args;

      expect(maxSizeError).to.be.instanceOf(EmptyRequestError);

      expect(errorHandlerSpy).to.be.calledOnce();
    });
  });

  it('should destroy socket and emit MaxRequestSizeError if request is bigger than max limit', () => {
    Connection.MAX_MESSAGE_SIZE = 1;

    socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

    setImmediate(() => {
      expect(requestHandlerMock).to.not.be.called();
      expect(socketMock.write).to.not.be.called();

      expect(socketMock.destroy).to.be.calledOnce();
      expect(socketMock.destroy.getCall(0).args).to.have.lengthOf(1);

      const [maxSizeError] = socketMock.destroy.getCall(0).args;

      expect(maxSizeError).to.be.instanceOf(MaxRequestSizeError);
      expect(maxSizeError.getMaxSize()).to.equal(Connection.MAX_MESSAGE_SIZE);

      expect(errorHandlerSpy).to.be.calledOnce();
    });
  });

  it('should wait for more data if request is not buffered completely to decode message', () => {
    const firstRequestPart = fixtures.info.request.bufferWithDelimiter.slice(0, 5);
    const secondRequestPart = fixtures.info.request.bufferWithDelimiter.slice(5);

    requestHandlerMock.withArgs(fixtures.info.request.object)
      .resolves(fixtures.info.response.object);

    socketMock.emit('data', firstRequestPart);

    setImmediate(() => {
      expect(requestHandlerMock).to.not.be.called();

      socketMock.emit('data', secondRequestPart);
    });

    setImmediate(() => {
      expect(requestHandlerMock).to.be.calledWithExactly(fixtures.info.request.object);

      assertSocketWrite(socketMock, fixtures.info);

      expect(errorHandlerSpy).to.not.be.called();
    });
  });

  it('should wait for more data if request is not buffered completely to parse the request size', function it() {
    const error = new Error('something wrong');

    this.sinon.stub(varint, 'decode').throws(error);

    const invalidRequest = Buffer.from([158]);

    socketMock.emit('data', invalidRequest);

    setImmediate(() => {
      expect(requestHandlerMock).to.not.be.called();
      expect(socketMock.write).to.not.be.called();

      expect(errorHandlerSpy).to.not.be.called();
    });
  });

  it('should destroy socket and emit UnableToParseRequestError on request message decode error', () => {
    const invalidRequest = Buffer.alloc(64).fill('b');

    socketMock.emit('data', invalidRequest);

    setImmediate(() => {
      expect(requestHandlerMock).to.not.be.called();
      expect(socketMock.write).to.not.be.called();

      expect(socketMock.destroy).to.be.calledOnce();
      expect(socketMock.destroy.getCall(0).args).to.have.lengthOf(1);

      const [maxSizeError] = socketMock.destroy.getCall(0).args;

      expect(maxSizeError).to.be.instanceOf(UnableToParseRequestError);
      expect(maxSizeError.getError()).to.be.instanceOf(Error);
      expect(maxSizeError.getError()).to.have.property('message', 'index out of range: 4 + 98 > 49');

      expect(maxSizeError.getRequestBuffer().toString()).to.equal(
        'b'.repeat(64),
      );

      expect(errorHandlerSpy).to.be.calledOnce();
    });
  });

  it('should not handle requests if stream is destroyed', () => {
    const invalidRequest = Buffer.alloc(64).fill('b');

    socketMock.emit('data', invalidRequest);

    expect(socketMock.destroyed).to.be.true();

    socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

    setImmediate(() => {
      expect(requestHandlerMock).to.not.be.called();
      expect(errorHandlerSpy).to.be.calledOnce();
    });
  });

  it('should throw error if handler throws', () => {
    let unhandledRejection;
    process.on('unhandledRejection', (e) => {
      unhandledRejection = e;
    });

    const error = new Error();

    requestHandlerMock.throws(error);

    socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

    setImmediate(() => {
      expect(socketMock.write).to.not.be.called();
      expect(errorHandlerSpy).to.not.be.called();

      expect(unhandledRejection).to.equal(error);
    });
  });

  it('should write error and destroy socket if handler responds with ResponseExceptionError', () => {
    const responseExceptionError = new ResponseExceptionError(
      fixtures.exception.error,
      fixtures.exception.response.object,
    );

    requestHandlerMock.throws(responseExceptionError);

    socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

    setImmediate(() => {
      assertSocketWrite(socketMock, fixtures.exception);

      expect(socketMock.destroy).to.be.calledOnceWithExactly(undefined);

      expect(errorHandlerSpy).to.not.be.called();
    });
  });

  it('should destroy socket if can\'t write ResponseExceptionError', function it() {
    const writeError = new Error('write error');

    const responseExceptionError = new ResponseExceptionError(
      fixtures.exception.error,
      fixtures.exception.response.object,
    );

    requestHandlerMock.throws(responseExceptionError);

    socketMock.write.restore();
    this.sinon.stub(socketMock, 'write').throws(writeError);

    socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

    setImmediate(() => {
      expect(socketMock.cork).to.be.calledOnce();
      expect(socketMock.uncork).to.be.calledOnce();

      expect(socketMock.destroy).to.be.calledOnceWithExactly(writeError);

      expect(errorHandlerSpy).to.be.calledOnceWithExactly(writeError);
    });
  });

  it('should destroy socket if can\'t write response', function it() {
    const writeError = new Error('write error');

    requestHandlerMock.withArgs(fixtures.info.request.object)
      .resolves(fixtures.info.response.object);

    socketMock.write.restore();
    this.sinon.stub(socketMock, 'write').throws(writeError);

    socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

    setImmediate(() => {
      expect(socketMock.cork).to.be.calledOnce();
      expect(socketMock.uncork).to.be.calledOnce();

      expect(socketMock.destroy).to.be.calledOnceWithExactly(writeError);

      expect(errorHandlerSpy).to.be.calledOnceWithExactly(writeError);
    });
  });

  describe('close', () => {
    it('should not handle requests after close', () => {
      const closePromise = connection.close();

      socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

      setImmediate(() => {
        expect(closePromise).to.be.fulfilled();
        expect(requestHandlerMock).to.not.be.called();
        expect(socketMock.write).to.not.be.called();
        expect(errorHandlerSpy).to.not.be.called();
      });
    });

    it('should handle the current request and close socket', () => {
      let resolveCurrentRequestPromise = () => {};
      const currentRequestPromise = new Promise((resolve) => {
        resolveCurrentRequestPromise = resolve;
      });

      requestHandlerMock.withArgs(fixtures.info.request.object)
        .returns(currentRequestPromise);

      socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

      const closePromise = connection.close();

      resolveCurrentRequestPromise(fixtures.info.response.object);

      setImmediate(() => {
        assertSocketWrite(socketMock, fixtures.info);

        expect(closePromise).to.be.fulfilled();

        expect(errorHandlerSpy).to.not.be.called();
      });
    });

    it('should resolve close promise if socket was destroyed', function it() {
      const error = new Error();

      let resolveCurrentRequestPromise = () => {};
      const currentRequestPromise = new Promise((resolve) => {
        resolveCurrentRequestPromise = resolve;
      });

      requestHandlerMock.withArgs(fixtures.info.request.object)
        .returns(currentRequestPromise);

      socketMock.write.restore();
      this.sinon.stub(socketMock, 'write').throws(error);

      socketMock.emit('data', fixtures.info.request.bufferWithDelimiter);

      const closePromise = connection.close();

      resolveCurrentRequestPromise(fixtures.info.response.object);

      setImmediate(() => {
        expect(socketMock.destroy).to.be.calledOnceWithExactly(error);

        expect(errorHandlerSpy).to.be.calledOnceWithExactly(error);

        expect(closePromise).to.be.fulfilled();
      });
    });
  });
});
