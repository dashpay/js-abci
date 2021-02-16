let ConnectionSpec = require('../../src/connection.js')
let fixtures = require('../../src/test/fixtures.js')
let { mockStream, wait } = require('../../src/test/common.js')

describe('connection', () => {
  it('create connection', () => {
    let stream = mockStream()

    let connection = new ConnectionSpec(stream)

    expect(connection).to.be.instanceOf(ConnectionSpec)
  })

  it('receive requests', async () => {
    let received = []
    let onMessage = (message, cb) => {
      received.push(message)
      cb()
    }
    let stream = mockStream()
    let connection = new ConnectionSpec(stream, onMessage)
    expect(connection).to.be.instanceOf(ConnectionSpec)

    stream.emit('data', fixtures.multiRequestBytes)

    await wait()

    expect(received).to.have.lengthOf(2)

    expect(received[0].toJSON()).to.deep.equal(fixtures.infoRequest)
    expect(received[1].toJSON()).to.deep.equal({ flush: {} })
  })

  it('requests not emitted while waiting for handler', async () => {
    let numMessages = 0
    let onMessageCb
    let onMessage = (message, cb) => {
      numMessages += 1
      onMessageCb = cb
    }
    let stream = mockStream()
    let connection = new ConnectionSpec(stream, onMessage)
    expect(connection).to.be.instanceOf(ConnectionSpec)

    stream.emit('data', fixtures.multiRequestBytes)

    await wait()

    expect(numMessages).to.equal(1)
    onMessageCb()
    expect(numMessages).to.equal(2)
    stream.emit('data', fixtures.multiRequestBytes)
    await wait()
    expect(numMessages).to.equal(2)
    onMessageCb()
    expect(numMessages).to.equal(3)
    onMessageCb()
    expect(numMessages).to.equal(4)
  })

  it('send responses', async () => {
    let onMessage = (message, cb) => cb()
    let stream = mockStream()
    let connection = new ConnectionSpec(stream, onMessage)

    connection.write(fixtures.infoResponse)
    await wait()
    expect(stream.sent.toString('hex')).to.equal(
      fixtures.infoResponseHex
    )
  })

  it('close', () => {
    let onMessage = (message, cb) => cb()
    let stream = mockStream()

    let destroyCalled = false
    stream.destroy = () => { destroyCalled = true }

    let connection = new ConnectionSpec(stream, onMessage)
    connection.close()
    expect(destroyCalled).to.be.true()
  })

  it('write errors are emitted', async () => {
    let onMessage = (message, cb) => cb()
    let stream = mockStream()

    const error = new Error('write error');

    stream.write = () => {
      throw error
    }

    let connection = new ConnectionSpec(stream, onMessage)

    connection.on('error', (err) => {
      expect(err).to.equal(error)
    })

    connection.write(fixtures.infoResponse);

    await wait()
  })
})
