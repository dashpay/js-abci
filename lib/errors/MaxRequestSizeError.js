const AbciError = require('./AbciError');

class MaxRequestSizeError extends AbciError {
  /**
   * @param {number} maxSize
   */
  constructor(maxSize) {
    super(`Request message is bigger than maximum size ${maxSize}`);

    this.maxSize = maxSize;
  }

  /**
   * @return {number}
   */
  getMaxSize() {
    return this.maxSize;
  }
}

module.exports = MaxRequestSizeError;
