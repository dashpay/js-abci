const AbciError = require('./AbciError');

class InvalidAbciResponseError extends AbciError {
  /**
   * @param {string} errorMessage
   * @param {Response} response
   */
  constructor(errorMessage, response) {
    super(`Invalid ABCI response: ${errorMessage}`);

    this.errorMessage = errorMessage;
    this.response = response;
  }

  /**
   * @return {string}
   */
  getErrorMessage() {
    return this.errorMessage;
  }

  /**
   * @return {Response}
   */
  getResponse() {
    return this.response;
  }
}

module.exports = InvalidAbciResponseError;
