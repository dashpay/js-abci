const { expect, use } = require('chai');
const sinon = require('sinon');
const dirtyChai = require('dirty-chai');
const sinonChai = require('sinon-chai');

use(dirtyChai);
use(sinonChai);

beforeEach(function beforeEach() {
  if (!this.sinonSandbox) {
    this.sinonSandbox = sinon.createSandbox();
  } else {
    this.sinonSandbox.restore();
  }
});

afterEach(function afterEach() {
  this.sinonSandbox.restore();
});

process.env.NODE_ENV = 'test';

global.expect = expect;
