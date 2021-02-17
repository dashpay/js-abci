const ConnectionOldSpec = require('../../lib/Connection.js');
const fixtures = require('../../lib/test/fixtures.js');
const { mockStream, wait } = require('../../lib/test/common.js');

describe('connection', () => {
  it('create connection', () => {
    const stream = mockStream();

    const connection = new ConnectionOldSpec(stream);

    expect(connection).to.be.instanceOf(ConnectionOldSpec);
  });

  it('receive requests', async () => {
    const received = [];
    const onMessage = (message, cb) => {
      received.push(message);
      cb();
    };
    const stream = mockStream();
    const connection = new ConnectionOldSpec(stream, onMessage);
    expect(connection).to.be.instanceOf(ConnectionOldSpec);

    stream.emit('data', fixtures.multiRequestBytes);

    await wait();

    expect(received).to.have.lengthOf(2);

    expect(received[0].toJSON()).to.deep.equal(fixtures.infoRequest);
    expect(received[1].toJSON()).to.deep.equal({ flush: {} });
  });

  it('requests not emitted while waiting for handler', async () => {
    let numMessages = 0;
    let onMessageCb;
    const onMessage = (message, cb) => {
      numMessages += 1;
      onMessageCb = cb;
    };
    const stream = mockStream();
    const connection = new ConnectionOldSpec(stream, onMessage);
    expect(connection).to.be.instanceOf(ConnectionOldSpec);

    stream.emit('data', fixtures.multiRequestBytes);

    await wait();

    expect(numMessages).to.equal(1);
    onMessageCb();
    expect(numMessages).to.equal(2);
    stream.emit('data', fixtures.multiRequestBytes);
    await wait();
    expect(numMessages).to.equal(2);
    onMessageCb();
    expect(numMessages).to.equal(3);
    onMessageCb();
    expect(numMessages).to.equal(4);
  });

  it('send responses', async () => {
    const onMessage = (message, cb) => cb();
    const stream = mockStream();
    const connection = new ConnectionOldSpec(stream, onMessage);

    connection.write(fixtures.infoResponse);
    await wait();
    expect(stream.sent.toString('hex')).to.equal(
      fixtures.infoResponseHex,
    );
  });

  it('close', () => {
    const onMessage = (message, cb) => cb();
    const stream = mockStream();

    let destroyCalled = false;
    stream.destroy = () => { destroyCalled = true; };

    const connection = new ConnectionOldSpec(stream, onMessage);
    connection.close();
    expect(destroyCalled).to.be.true();
  });

  it('write errors are emitted', async () => {
    const onMessage = (message, cb) => cb();
    const stream = mockStream();

    const error = new Error('write error');

    stream.write = () => {
      throw error;
    };

    const connection = new ConnectionOldSpec(stream, onMessage);

    connection.on('error', (err) => {
      expect(err).to.equal(error);
    });

    connection.write(fixtures.infoResponse);

    await wait();
  });
});
