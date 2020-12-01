let net = require('net')
let Connection = require('../../src/connection.js')
let { createServer } = require('../../index')
let fixtures = require('../../src/test/fixtures.js')
let { mockStream, wait } = require('../../src/test/common.js')

describe('server', () => {
  it('create server', () => {
    let server = createServer({})

    expect(server).to.be.instanceOf(net.Server);
  })

  it('respond', async () => {
    await Connection.loaded

    let server = createServer({
      info (message) {
        expect(message.toJSON()).to.deep.equal(fixtures.infoRequest.info)

        return fixtures.infoResponse.info
      }
    })

    let stream = mockStream()
    server.emit('connection', stream)

    stream.emit('data', fixtures.infoRequestBytes)

    await wait()

    expect(stream.sent.toString('hex')).to.equal(fixtures.infoResponseHex)
  })

  it('respond async', async () => {
    await Connection.loaded

    let server = createServer({
      async info (message) {
        expect(message.toJSON()).to.deep.equal(fixtures.infoRequest.info)

        return fixtures.infoResponse.info
      }
    })

    let stream = mockStream()
    server.emit('connection', stream)

    stream.emit('data', fixtures.infoRequestBytes)

    await wait()

    expect(stream.sent.toString('hex')).to.equal(fixtures.infoResponseHex)
  })

  it('respond to non-implemented functions', async () => {
    await Connection.loaded

    let server = createServer({})

    let stream = mockStream()

    server.emit('connection', stream)

    stream.emit('data', fixtures.infoRequestBytes)

    await wait()

    expect(stream.sent.toString('hex')).to.equal(fixtures.emptyInfoResponseHex)
  })

  it('respond to special functions', async () => {
    await Connection.loaded

    let server = createServer({})

    let stream = mockStream()

    server.emit('connection', stream)

    stream.emit('data', fixtures.flushRequestBytes)
    stream.emit('data', fixtures.echoRequestBytes)

    await wait()

    expect(stream.sent.toString('hex')).to.equal(
      fixtures.flushResponseHex +
      fixtures.echoResponseHex
    )
  })

  it('respond with callback error', async () => {
    await Connection.loaded

    let server = createServer({
      info (message) {
        throw Error('test error')
      }
    })

    let stream = mockStream()

    server.emit('connection', stream)

    stream.emit('data', fixtures.multiRequestBytes)

    await wait()

    expect(stream.sent.toString('hex')).to.equal(
      fixtures.exceptionResponseHex
    )
  })

  it('respond with async callback error', async () => {
    await Connection.loaded

    let server = createServer({
      async info (message) {
        throw Error('test error')
      }
    })

    let stream = mockStream()
    server.emit('connection', stream)

    stream.emit('data', fixtures.multiRequestBytes)

    await wait()

    expect(stream.sent.toString('hex')).to.equal(
      fixtures.exceptionResponseHex
    )
  })
});
