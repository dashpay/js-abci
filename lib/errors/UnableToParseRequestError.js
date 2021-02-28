const AbciError = require('./AbciError');

class UnableToParseRequestError extends AbciError {
  /**
   * @param {Error} error
   * @param {Buffer} requestBuffer
   */
  constructor(error, requestBuffer) {
    super(`Unable to parse request: ${error.message}`);

    this.error = error;
    this.requestBuffer = requestBuffer;
  }

  /**
   * @return {Error}
   */
  getError() {
    return this.error;
  }

  /**
   * @return {Buffer}
   */
  getRequestBuffer() {
    return this.requestBuffer;
  }
}

module.exports = UnableToParseRequestError;
