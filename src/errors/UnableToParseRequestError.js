const AbciError = require('./AbciError');

class UnableToParseRequestError extends AbciError {
  /**
   * @param {Error} error
   * @param {BufferList} readerBuffer
   */
  constructor(error, readerBuffer) {
    super(`Unable to parse request: ${error.message}`);

    this.error = error;
    this.readerBuffer = readerBuffer.toString('hex');
  }

  /**
   * @return {Error}
   */
  getError() {
    return this.error;
  }

  /**
   * @return {BufferList}
   */
  getReaderBuffer() {
    return this.readerBuffer;
  }
}

module.exports = UnableToParseRequestError;
