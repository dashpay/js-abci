const getPort = require('get-port');

const os = require('os');

const Docker = require('dockerode');

const { RpcClient } = require('tendermint');

const wait = require('../../lib/util/wait');

const createServer = require('../../index');

describe('abciServer', function describe() {
  this.timeout(20000);

  let docker;
  let app;
  let ports;
  let client;
  let container;
  let server;

  beforeEach(async () => {
    // Start Tenderdash
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

    container = await docker.createContainer(createOptions);

    await container.start();

    // Create server
    app = {};

    server = createServer(app);

    server.once('error', expect.fail);

    server.on('connection', async (socket) => {
      socket.on('error', expect.fail);
    });

    server.listen(ports.abci, '0.0.0.0');

    // Wait until Tenderdash is connected
    await wait(3000);

    // Initialize RPC client
    client = new RpcClient(`127.0.0.1:${ports.rpc}`);
  });

  it('should respond with Info', async () => {
    const infoResponse = { version: '1.2.3' };

    app.info = () => infoResponse;

    const { response } = await client.abciInfo();

    expect(response).to.deep.equal(infoResponse);
  });

  it('should respond with Query', async () => {
    const queryResponse = {
      value: Buffer.alloc(32).fill(1),
    };

    app.query = () => queryResponse;

    const { response } = await client.abciQuery();

    expect(response).to.have.property(
      'value',
      queryResponse.value.toString('base64'),
    );
  });

  it('should broadcast transaction', async () => {
    const { check_tx: checkTx, deliver_tx: deliverTx } = await client.broadcastTxCommit({
      tx: `0x${Buffer.alloc(10e3).fill(1).toString('hex')}`,
    });

    expect(checkTx).to.have.property('code', 0);
    expect(deliverTx).to.have.property('code', 0);
  });

  it('should close server', (done) => {
    server.close(done);
  });

  afterEach(async () => {
    if (container) {
      await container.stop();
    }
  });
});
