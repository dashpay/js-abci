const getPort = require('get-port');

const os = require('os');

const Docker = require('dockerode');

const { RpcClient } = require('tendermint');

const { wait } = require('../../src/test/common');

const createAbciServer = require('../../index')

describe('abci', function () {
  this.timeout(20000)

  let docker;
  let ports;
  let client;
  let container;
  let dockerImage;

  before(async () => {
    docker = new Docker();

    dockerImage = 'dashpay/tenderdash';
  })

  beforeEach(async function beforeEach() {
    if (os.platform() === 'linux') {
      this.skip('test doesn\'t support linux at the moment')
    }

    ports = {
      abci: await getPort(),
      p2p: await getPort(),
      rpc: await getPort(),
    }

    let createOptions = {
      Image: dockerImage,
      Cmd: [
        'node',
        '--proxy_app', `host.docker.internal:${ports.abci}`,
      ],
      HostConfig: {
        AutoRemove: true,
        PortBindings: {
          [`26657/tcp`]: [{ HostPort: ports.rpc.toString() }],
        }
      },
    }

    container = await docker.createContainer(createOptions);

    await container.start();

    client = new RpcClient(`localhost:${ports.rpc}`);
  })

  it('app info resolves over RPC', async () => {
    let info = {
      data: 'test app',
      version: '1.2.3'
    }

    let server = createAbciServer({
      info: () => info
    })

    server.listen(ports.abci)

    await wait(2000)

    const rpcResponse = await client.abciInfo()

    expect(rpcResponse).to.deep.equal({ response: info })
  })

  it('large tx', async () => {
    let server = createAbciServer({
      info: () => ({
        data: 'test app',
        version: '1.2.3'
      }),

      initChain () {
        return {}
      },

      beginBlock () {
        return {}
      },

      checkTx () {
        return {}
      },

      deliverTx () {
        return {}
      }
    })

    server.listen(ports.abci)

    await wait(2000)

    let res = await client.broadcastTxCommit({
      tx: '0x' + Buffer.alloc(10e3).toString('hex')
    })

    expect(res.check_tx.code).to.equal(0)
    expect(res.deliver_tx.code).to.equal(0)
  })

  afterEach(async () => {
    if (container) {
      await container.stop();
    }
  })
})
