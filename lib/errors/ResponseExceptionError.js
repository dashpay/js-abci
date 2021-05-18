const AbciError = require('./AbciError');

class ResponseExceptionError extends AbciError {
  /**
   * @param {Error} error
   * @param {Response} response
   */
  constructor(error, response) {
    super(`Exception thrown: ${error.message}`);

    this.error = error;
    this.response = response;
  }

  /**
   * @return {Error}
   */
  getError() {
    return this.error;
  }

  /**
   * @return {Response}
   */
  getResponse() {
    return this.response;
  }
}

module.exports = ResponseExceptionError;
