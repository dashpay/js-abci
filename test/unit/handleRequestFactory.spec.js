const {
  tendermint: {
    abci: {
      Request,
      Response,
    },
  },
} = require('../../types');

const fixtures = require('../../lib/test/fixtures');

const handleRequestFactory = require('../../lib/handleRequestFactory');
const ResponseExceptionError = require('../../lib/errors/ResponseExceptionError');
const InvalidAbciResponseError = require('../../lib/errors/InvalidAbciResponseError');

describe('handleRequestFactory', () => {
  let handleRequest;
  let appMock;
  let serverMock;

  beforeEach(function beforeEach() {
    appMock = {
      info: this.sinon.stub(),
      commit: this.sinon.stub(),
    };

    serverMock = {
      emit: this.sinon.stub(),
    };

    handleRequest = handleRequestFactory(appMock, serverMock);
  });

  it('should respond with flush', async () => {
    const response = await handleRequest(fixtures.flush.request.object);

    expect(response).to.deep.equal(fixtures.flush.response.object);
  });

  it('should respond with echo', async () => {
    const response = await handleRequest(fixtures.echo.request.object);

    expect(response).to.deep.equal(fixtures.echo.response.object);
  });

  it('should respond with with empty message if handler is not defined', async () => {
    const request = new Request({
      unknownHandler: {},
    });

    const response = await handleRequest(request);

    expect(response).to.deep.equal(new Response({
      unknownHandler: {},
    }));
  });

  it('should respond handler message', async () => {
    appMock.info.resolves(fixtures.info.response.object.info);

    const response = await handleRequest(fixtures.info.request.object);

    expect(response).to.deep.equal(fixtures.info.response.object);
  });

  it('should throw ResponseExceptionError if handler is errored', async () => {
    const error = new Error('some error');

    appMock.info.throws(error);

    try {
      await handleRequest(fixtures.info.request.object);

      expect.fail('Error was not thrown');
    } catch (e) {
      expect(e).to.be.an.instanceOf(ResponseExceptionError);

      expect(serverMock.emit).to.have.been.calledOnceWithExactly('error', e.getError());
    }
  });

  it('should throw InvalidAbciResponseError if message is not valid', async () => {
    appMock.info.resolves(42);

    try {
      await handleRequest(fixtures.info.request.object);

      expect.fail('Error was not thrown');
    } catch (e) {
      expect(e).to.be.an.instanceOf(InvalidAbciResponseError);
    }
  });
});
