const { expect, use } = require('chai')
const dirtyChai = require('dirty-chai')

use(dirtyChai)

process.env.NODE_ENV = 'test'

global.expect = expect
