const { DuplexMock } = require('stream-mock');
const fixtures = require('../../lib/test/fixtures.js');

const Connection = require('../../lib/Connection');
const MaxRequestSizeError = require('../../lib/errors/MaxRequestSizeError');
const UnableToParseRequestError = require("../../lib/errors/UnableToParseRequestError");

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

    connection = new Connection(socketMock, requestHandlerMock);
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
    let resolveFirstRequestPromise;
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

  it('should emit MaxRequestSizeError and destroy socket if request is bigger than max limit', () => {
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

  it('should wait for more data if request is not buffered completely', () => {
    const firstRequestPart = fixtures.info.request.bufferWithDelimiter.slice(0, 5);
    const secondRequestPart = fixtures.info.request.bufferWithDelimiter.slice(5);

    requestHandlerMock.withArgs(fixtures.info.request.object)
      .resolves(fixtures.info.response.object);

    socketMock.emit('data', firstRequestPart);

    setImmediate(async () => {
      expect(requestHandlerMock).to.not.be.called();

      socketMock.emit('data', secondRequestPart);
    });

    setImmediate(() => {
      expect(requestHandlerMock).to.be.calledWithExactly(fixtures.info.request.object);

      assertSocketWrite(socketMock, fixtures.info);
    });
  });

  it('should emit UnableToParseRequestError and destroy socket on request parse error', () => {
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

      expect(maxSizeError.getReaderBuffer().toString()).to.equal(invalidRequest.toString());

      expect(errorHandlerSpy).to.be.calledOnce();
    });
  });

  it('should not handle requests if stream is destroyed');
  it('should not read data since handler is running');
  it('should throw error if handler throws');
  it('should write error and destroy socket if handler responds with ResponseExceptionError');
  it('should destroy socket if can\'t write ResponseExceptionError');
  it('should write flush response with flush acknowledgment');
  it('should destroy socket if can\'t write response');
});
