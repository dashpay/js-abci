const getPort = require('get-port');

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

  before(async () => {
    docker = new Docker();
  })

  beforeEach(async () => {
    ports = {
      abci: await getPort(),
      rpc: await getPort(),
    }

    container = await docker.createContainer({
      Image: 'tendermint/tendermint',
      Cmd: ['node', '--proxy_app', `host.docker.internal:${ports.abci}`],
      HostConfig: {
        AutoRemove: true,
        PortBindings: {
          '26657/tcp': [{ HostPort: ports.rpc.toString() }],
        }
      },
    });

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

  it.skip('large tx', async () => {
    let server = createAbciServer({
      info: () => ({
        data: 'test app',
        version: '1.2.3'
      }),

      initChain (req) {
        return {}
      },

      beginBlock (req) {
        return {}
      },

      checkTx (req) {
        return {}
      },

      deliverTx (req) {
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
    await container.stop();
  })
})
