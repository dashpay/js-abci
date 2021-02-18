# js-abci

ABCI server for Node.js. Supports Tenderdash 0.34+

## Usage

`npm install @dashevo/abci`

Requires Node.js v10.9+

```js
let createServer = require('abci')

let server = createServer({
  info (request) {
    console.log('got info request', request)
    return { ... }
  }

  // implement any ABCI method handlers here
})

process.on('SIGTERM', async () => {
  await server.close();

  // Gracefull shutdown

  process.exit(0);
});

server.on('connection', (socket) => {
  console.log(`Accepted new ABCI connection #${socket.connection.id} from ${socket.remoteAddress}:${socket.remotePort}`);

  socket.on('error', (e) => {
    console.error(`ABCI connection #${socket.connection.id} error`);
  });

  socket.once('close', (hasError) => {
    let message = `ABCI connection #${socket.connection.id} is closed`;
    if (hasError) {
      message += ' with error';
    }

    console.log(message);
  });
});

server.once('close', () => {
  console.log('ABCI server is closed');
});

server.on('error', async (e) => {
  console.error(e);
  
  // Graceful shutdown
  
  process.exit(1);
});

server.on('listening', () => {
  console.log(`ABCI server is waiting for connections`);
});

server.listen(26658)

```

### `let server = createServer(app)`

Returns a [`net.Server`](https://nodejs.org/api/net.html#net_class_net_server) that accepts ABCI connections from a Tendermint node.

`app` should be an object with ABCI method handler functions. Each handler receives one `request` argument, and can return the response value or a `Promise` which resolves to the response value. `cb` responds to the ABCI request with either the error or `response` value.

Supported ABCI methods are:

```
echo
flush
info
setOption
initChain
query
beginBlock
checkTx
deliverTx
endBlock
commit
```
