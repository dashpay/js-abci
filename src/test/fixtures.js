const { varint } = require('protocol-buffers-encodings');

const {
  tendermint: {
    abci: {
      Request,
      Response,
      RequestInfo,
      RequestEcho,
    },
  },
} = require('../../types');

function getMessageLengthBuffer(MessageClass, message) {
  const messageBytes = MessageClass.encode(message).finish();

  return Buffer.from(
    varint.encode(messageBytes.length << 1),
  );
}

function encodeDelimited(MessageClass, message) {
  const err = MessageClass.verify(infoRequest);
  if (err) {
    throw new Error(err);
  }

  const messageBytes = MessageClass.encode(message).finish();

  const lengthBytes = Buffer.from(
    varint.encode(messageBytes.length << 1),
  );

  return Buffer.concat([lengthBytes, messageBytes]);
}

const infoRequest = new Request({
  info: new RequestInfo({
    version: '0.19.2-64408a40',
  }),
});

const infoRequestBytes = encodeDelimited(Request, infoRequest);

const infoResponse = new Response({
  info: {
    data: 'test',
    version: '123',
    lastBlockHeight: 5,
    lastBlockAppHash: Buffer.alloc(0),
  },
});

const infoResponseBytes = encodeDelimited(Response, infoResponse);

const echoMessage = {
  echo: new RequestEcho({
    message: 'hello!',
  }),
};

const echoRequest = new Request(echoMessage);

const echoRequestBytes = encodeDelimited(Request, echoRequest);

const echoResponse = new Response(echoMessage);

const echoResponseBytes = encodeDelimited(Response, echoResponse);

const flushRequest = new Request({
  flush: { },
});

const flushRequestBytes = encodeDelimited(Request, flushRequest);

module.exports = {
  multiRequestBytes: Buffer.concat([infoRequestBytes, flushRequestBytes]),
  infoRequestBytes,
  flushRequestBytes,
  echoRequestBytes,
  // infoRequest: infoRequest.toJSON(),
  // infoResponse: infoResponse.toJSON(),
  infoResponseHex: infoResponseBytes.toString('hex'),
  emptyInfoResponseHex: '042200',
  flushResponseHex: '041a00',
  echoResponseHex: echoResponseBytes.toString('hex'),
  exceptionResponseHex: '2a0a130a114572726f723a2074657374206572726f72',

  info: {
    request: {
      object: infoRequest,
      bufferWithDelimiter: infoRequestBytes,
    },
    response: {
      object: infoResponse,
      buffer: Response.encode(infoResponse).finish(),
      delimiter: getMessageLengthBuffer(Response, infoResponse)
    },
  },

  echo: {
    request: {
      object: echoRequest,
      bufferWithDelimiter: echoRequestBytes,
    },
    response: {
      object: echoResponse,
      buffer: Response.encode(infoResponse).finish(),
      delimiter: getMessageLengthBuffer(Response, echoResponse),
    },
  },
};
