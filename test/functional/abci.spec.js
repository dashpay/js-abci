const getPort = require('get-port');

const os = require('os');

const Docker = require('dockerode');

const { RpcClient } = require('tendermint');

const {
  tendermint: {
    abci: {
      ResponseQuery,
    },
  },
} = require('../../types');

const fixtures = require('../../lib/test/fixtures');

const createServer = require('../../index');
const path = require('path');

describe('abci', function describe() {
  this.timeout(200000);

  let docker;
  let app;
  let ports;
  let client;
  let container;
  let server;

  beforeEach(async function beforeEach() {
    docker = new Docker();

    const dockerImage = 'dashpay/tenderdash';

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

    app = {
      info: () => fixtures.info.response.object,

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

      query() {
        return new ResponseQuery({
          value: Buffer.alloc(32).fill(1),
        });
      },
    };

    container = await docker.createContainer(createOptions);

    await container.start();

    client = new RpcClient(`127.0.0.1:${ports.rpc}`);
    console.log(ports.rpc);

    server = createServer(app);

    server.once('error', expect.fail);

    server.on('connection', async (socket) => {
      socket.on('error', expect.fail);
    });
  });

  it('app info resolves over RPC', async (done) => {
    server.once('connection', async () => {
      setTimeout(async () => {
        console.log('request');
        const rpcResponse = await client.abciQuery({ path: '/', data: '123' });
        console.log('requested');

        expect(rpcResponse).to.deep.equal(fixtures.info.response.object);

        done();
      }, 4000);
    });

    server.listen(ports.abci);
  });

  it('test close');

  it('should accept transaction', async (done) => {
    server.once('connection', async () => {
      const res = await client.broadcastTxCommit({
        tx: `0x${Buffer.alloc(10e3).toString('hex')}`,
      });

      expect(res.check_tx.code).to.equal(0);
      expect(res.deliver_tx.code).to.equal(0);

      done();
    });

    server.listen(ports.abci);
  });

  afterEach(async () => {
    if (container) {
      await container.stop();
    }
  });
});
