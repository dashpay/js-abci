'use strict'

const EventEmitter = require('events')
const BufferList = require('bl')
const debug = require('debug')('abci')
const { varint } = require('protocol-buffers-encodings')
const { Request, Response } = require('../types.js').tendermint.abci

const MAX_MESSAGE_SIZE = 104857600 // 100mb

class Connection extends EventEmitter {
  constructor (stream, onMessage) {
    super()

    this.stream = stream
    this.onMessage = onMessage
    this.recvBuf = new BufferList()
    this.waiting = false

    stream.on('data', this.onData.bind(this))
    stream.on('error', this.error.bind(this))
  }

  error (err, skipWriteError = false) {
    debug('Connection error:', err)

    if (this.stream.writable && !skipWriteError) {
      this.write({
        exception: { error: err.toString() }
      })
    }

    if (!this.stream.writableEnded && !this.stream.destroyed) {
      this.close()
    }

    this.emit('error', err)
  }

  async onData (data) {
    this.recvBuf.append(data)

    if (this.waiting) return

    this.maybeReadNextMessage()
  }

  maybeReadNextMessage () {
    let message

    try {
      let length = varint.decode(this.recvBuf.slice(0, 8)) >> 1

      let messageLength = varint.decode.bytes

      if (length > MAX_MESSAGE_SIZE) {
        this.error(Error('message is longer than maximum size'))
        return
      }

      if (messageLength + length > this.recvBuf.length) {
        // buffering message, don't read yet
        return
      }

      let messageBytes = this.recvBuf.slice(
        messageLength,
        messageLength + length
      )

      this.recvBuf.consume(messageLength + length)

      message = Request.decode(messageBytes)

      this.waiting = true
      this.stream.pause()

      // log incoming messages, except for 'flush'
      if (!message.flush) {
        debug('<<', message)
      }
    } catch (e) {
      e.recvBuf = this.recvBuf.toString('hex')

      this.error(e)
    }

    this.onMessage(message, () => {
      this.waiting = false
      this.stream.resume()

      if (this.recvBuf.length > 0) {
        this.maybeReadNextMessage()
      }
    })
  }

  write (message) {
    Response.verify(message)

    // log outgoing messages, except for 'flush'
    if (debug.enabled && !message.flush) {
      debug('>>', Response.fromObject(message))
    }

    let messageBytes = Response.encode(message).finish()

    let lengthBytes = varint.encode(messageBytes.length << 1)

    try {
      this.stream.write(Buffer.from(lengthBytes))
      this.stream.write(messageBytes)
    } catch (e) {
      this.error(e, true)
    }
  }

  close () {
    this.stream.destroy()
  }
}

module.exports = Connection
