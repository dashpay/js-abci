const {
  tendermint: {
    abci: {
      Response,
      ResponseFlush,
      ResponseEcho,
    },
  },
} = require('../../types');

const handleRequestFactory = require('../../src/handleRequestFactory');
const ResponseExceptionError = require('../../src/errors/ResponseExceptionError');
const InvalidAbciResponseError = require('../../src/errors/InvalidAbciResponseError');

describe('handleRequestFactory', () => {
  let handleRequest;
  let appMock;
  let serverMock;

  beforeEach(function beforeEach() {
    appMock = {
      testHandler: this.sinonSandbox.stub(),
      commit: this.sinonSandbox.stub(),
    };

    serverMock = {
      emit: this.sinonSandbox.stub(),
    };

    handleRequest = handleRequestFactory(appMock, serverMock);
  });

  it('should respond with flush', async () => {
    const request = {
      flush: {},
    };

    const result = await handleRequest(request);

    expect(result).to.have.property('flush');
    expect(result.flush).to.be.an.instanceOf(ResponseFlush);
  });

  it('should respond with echo', async () => {
    const request = {
      echo: {},
    };

    const result = await handleRequest(request);

    expect(result).to.have.property('echo');
    expect(result.echo).to.be.an.instanceOf(ResponseEcho);
  });

  it('should respond with with empty message if handler is not defined', async () => {
    const request = {
      unknownHandler: {},
    };

    const result = await handleRequest(request);

    expect(result).to.deep.equal(new Response({
      unknownHandler: {},
    }));
  });

  it('should respond handler message', async () => {
    const request = {
      testHandler: {},
    };

    appMock.testHandler.resolves(42);

    const result = await handleRequest(request);

    expect(result).to.deep.equal(new Response({
      testHandler: 42,
    }));
  });

  it('should throw ResponseExceptionError if handler is errored', async () => {
    const request = {
      testHandler: {},
    };

    const error = new Error('some error');

    appMock.testHandler.throws(error);

    try {
      await handleRequest(request);
      expect.fail('Error was not thrown');
    } catch (e) {
      expect(e).to.be.an.instanceOf(ResponseExceptionError);

      expect(serverMock.emit).to.have.been.calledOnceWithExactly('error', e.getError());
    }
  });

  it('should throw InvalidAbciResponseError if message is not valid', async () => {
    const request = {
      commit: {},
    };

    appMock.commit.resolves(42);

    try {
      await handleRequest(request);
      expect.fail('Error was not thrown');
    } catch (e) {
      expect(e).to.be.an.instanceOf(InvalidAbciResponseError);
    }
  });
});
