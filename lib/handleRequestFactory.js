const {
  tendermint: {
    abci: {
      Response,
      ResponseFlush,
      ResponseEcho,
      ResponseException,
    },
  },
} = require('../types.js');

const ResponseExceptionError = require('./errors/ResponseExceptionError');
const InvalidAbciResponseError = require('./errors/InvalidAbciResponseError');

/**
 *
 * @param {Object} app
 * @param {Server} server
 * @return {handleRequest}
 */
function handleRequestFactory(app, server) {
  /**
   * @typedef {handleRequest}
   * @param {Request} request
   *
   * @return {Promise<Response>}
   */
  async function handleRequest(request) {
    const [messageType] = Object.keys(request);
    const requestMessage = request[messageType];

    const response = new Response();

    let responseMessage;

    switch (messageType) {
      case 'flush':
        responseMessage = new ResponseFlush();

        break;
      case 'echo':
        responseMessage = new ResponseEcho({
          message: requestMessage.message,
        });

        break;
      default:
        if (app[messageType] === undefined) {
          responseMessage = {};

          break;
        }

        try {
          responseMessage = await app[messageType](requestMessage);
        } catch (e) {
          server.emit('error', e);

          responseMessage = new ResponseException({
            error: e.toString(),
          });

          response.exception = responseMessage;

          throw new ResponseExceptionError(e, response);
        }
    }

    // Create and verify response
    response[messageType] = responseMessage;

    const errorMessage = Response.verify(response);

    if (errorMessage !== null) {
      throw new InvalidAbciResponseError(errorMessage, response);
    }

    return response;
  }

  return handleRequest;
}

module.exports = handleRequestFactory;
