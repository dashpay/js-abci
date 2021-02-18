const net = require('net');

const Connection = require('./Connection.js');

const handleRequestFactory = require('./handleRequestFactory');

function createServer(app) {
  const connections = new Set();
  let connectionId = 0;

  const server = net.createServer((socket) => {
    const handleRequest = handleRequestFactory(app, server);

    connectionId += 1;

    const connection = new Connection(
      connectionId,
      socket,
      handleRequest,
    );

    // eslint-disable-next-line no-param-reassign
    socket.connection = connection;

    socket.once('close', () => {
      connections.delete(connection);
    });

    connections.add(connection);
  });

  const originalClose = server.close;

  server.close = function close(callback) {
    const serverClosePromise = new Promise((resolve) => {
      originalClose.call(server, resolve);
    });

    const connectionClosePromises = Array.from(connections).map((connection) => connection.close());

    process.nextTick(() => {
      Promise.all([
        serverClosePromise,
        ...connectionClosePromises,
      ]).then(([error]) => {
        callback(error);
      });
    });
  };

  return server;
}

module.exports = createServer;
