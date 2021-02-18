const net = require('net');

const Connection = require('./Connection.js');

const handleRequestFactory = require('./handleRequestFactory');

function createServer(app) {
  const connections = { };
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
      delete connections[connectionId];
    });

    connections[connectionId] = connection;
  });

  const originalClose = server.close;

  server.close = function close(callback) {
    originalClose.apply(server, callback);

    setImmediate(() => {
      Object.values(connections).forEach((connection) => connection.close());
    });
  };

  return server;
}

module.exports = createServer;
