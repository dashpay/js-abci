const net = require('net');

const Connection = require('./Connection.js');

const handleRequestFactory = require('./handleRequestFactory');

function createServer(app) {
  const server = net.createServer((socket) => {
    const handleRequest = handleRequestFactory(app, server);

    return new Connection(
      socket,
      handleRequest,
    );
  });

  return server;
}

module.exports = createServer;
