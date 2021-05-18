const AbciError = require('./AbciError');

class EmptyRequestError extends AbciError {
  constructor() {
    super('Empty request message length');
  }
}

module.exports = EmptyRequestError;
