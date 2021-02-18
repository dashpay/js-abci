const getPort = require('get-port');

const os = require('os');

const Docker = require('dockerode');

const { RpcClient } = require('tendermint');

const {
  tendermint: {
    abci: {
      Request,
      ResponseCommit,
    },
  },
} = require('../../types');

const { wait } = require('../../lib/test/common');

const createServer = require('../../index');

describe('abci', function describe() {
  this.timeout(20000000);

  let docker;
  let ports;
  let client;
  let container;
  let dockerImage;

  before(async () => {
    docker = new Docker();

    dockerImage = 'dashpay/tenderdash';
  });

  beforeEach(async () => {
    const extraHosts = [];
    if (os.platform() === 'linux') {
      extraHosts.push('host.docker.internal:host-gateway');
    }

    ports = {
      abci: await getPort(),
      p2p: await getPort(),
      rpc: await getPort(),
    };

    const createOptions = {
      Image: dockerImage,
      Cmd: [
        'node',
        '--proxy_app', `host.docker.internal:${ports.abci}`,
      ],
      HostConfig: {
        AutoRemove: true,
        PortBindings: {
          '26657/tcp': [{ HostPort: ports.rpc.toString() }],
        },
        ExtraHosts: extraHosts,
      },
    };

    container = await docker.createContainer(createOptions);

    await container.start();

    client = new RpcClient(`localhost:${ports.rpc}`);
  });

  it('app info resolves over RPC', async (done) => {
    const info = {
      data: 'test app',
      version: '1.2.3',
    };

    const server = createServer({
      info: () => info,
      commit: () => {
        return new ResponseCommit({
          appHash: Buffer.alloc(32).fill(1),
        });
      },
    });

    server.on('error', (e) => {
      console.error(e);
    });

    server.on('connection', async (socket) => {
      socket.on('error', (e) => {
        console.error(e);
      });
    });

    server.once('connection', async () => {
      console.log('request');
      const rpcResponse = await client.abciInfo();
      console.log('requested');

      expect(rpcResponse).to.deep.equal({ response: info });

      done();
    });

    server.listen(ports.abci);
  });

  it('test close');

  it.skip('large tx', async () => {
    const server = createServer({
      info: () => ({
        data: 'test app',
        version: '1.2.3',
      }),

      initChain() {
        return {};
      },

      beginBlock() {
        return {};
      },

      checkTx() {
        return {};
      },

      deliverTx() {
        return {};
      },
    });

    server.listen(ports.abci);

    await wait(2000);

    const res = await client.broadcastTxCommit({
      tx: `0x${Buffer.alloc(10e3).toString('hex')}`,
    });

    expect(res.check_tx.code).to.equal(0);
    expect(res.deliver_tx.code).to.equal(0);
  });

  afterEach(async () => {
    if (container) {
      await container.stop();
    }
  });
});
