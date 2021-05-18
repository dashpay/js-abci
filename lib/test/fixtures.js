const { varint } = require('protocol-buffers-encodings');

const {
  tendermint: {
    abci: {
      Request,
      Response,
      RequestInfo,
      ResponseInfo,
      RequestEcho,
      ResponseEcho,
      ResponseException,
      RequestFlush,
      ResponseFlush,
    },
  },
} = require('../../types');

function encodeDelimited(MessageClass, message) {
  const err = MessageClass.verify(message);

  if (err) {
    throw new Error(err);
  }

  const messageBytes = MessageClass.encode(message).finish();

  const lengthBytes = Buffer.from(
    // eslint-disable-next-line no-bitwise
    varint.encode(messageBytes.length << 1),
  );

  return [lengthBytes, messageBytes];
}

const infoRequest = new Request({
  info: new RequestInfo({
    version: '0.19.2-64408a40',
  }),
});

const infoResponse = new Response({
  info: new ResponseInfo({
    version: '1.2.3',
    lastBlockHeight: 0,
    lastBlockAppHash: Buffer.alloc(32).fill(1),
  }),
});

const [infoResponseDelimiter, infoResponseBuffer] = encodeDelimited(Response, infoResponse);

const echoMessage = {
  message: 'hello!',
};

const echoRequest = new Request({
  echo: new RequestEcho(echoMessage),
});

const echoResponse = new Response({
  echo: new ResponseEcho(echoMessage),
});

const [echoResponseDelimiter, echoResponseBuffer] = encodeDelimited(Response, echoResponse);

const flushRequest = new Request({
  flush: new RequestFlush(),
});

const flushResponse = new Response({
  flush: new ResponseFlush(),
});

const [flushResponseDelimiter, flushResponseBuffer] = encodeDelimited(Response, flushResponse);

const error = new Error();

const exceptionResponse = new Response({
  exception: new ResponseException({
    error: error.toString(),
  }),
});

const [exceptionResponseDelimiter, exceptionResponseBuffer] = encodeDelimited(
  Response,
  exceptionResponse,
);

module.exports = {
  info: {
    request: {
      object: infoRequest,
      bufferWithDelimiter: Buffer.concat(encodeDelimited(Request, infoRequest)),
    },
    response: {
      object: infoResponse,
      buffer: infoResponseBuffer,
      delimiter: infoResponseDelimiter,
    },
  },

  echo: {
    request: {
      object: echoRequest,
      bufferWithDelimiter: Buffer.concat(encodeDelimited(Request, echoRequest)),
    },
    response: {
      object: echoResponse,
      buffer: echoResponseBuffer,
      delimiter: echoResponseDelimiter,
    },
  },

  exception: {
    error,
    response: {
      object: exceptionResponse,
      buffer: exceptionResponseBuffer,
      delimiter: exceptionResponseDelimiter,
    },
  },

  flush: {
    request: {
      object: flushRequest,
      bufferWithDelimiter: Buffer.concat(encodeDelimited(Request, flushRequest)),
    },
    response: {
      object: flushResponse,
      buffer: flushResponseBuffer,
      delimiter: flushResponseDelimiter,
    },
  },
};
