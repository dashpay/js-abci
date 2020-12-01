const { varint } = require('protocol-buffers-encodings')

const { tendermint: { abci: { Request, RequestInfo, RequestFlush } } } = require('../types');

function encodeRequest(message) {
  let err = Request.verify(infoRequest);
  if (err) {
    throw new Error(err);
  }

  const messageBytes = Request.encode(message).finish();

  let lengthBytes = Buffer.from(
    varint.encode(messageBytes.length << 1),
  );

  return Buffer.concat([lengthBytes, messageBytes]);
}

const infoRequest = new Request({
  info: new RequestInfo({
    version: '0.19.2-64408a40'
  }),
});

const infoRequestBytes = encodeRequest(infoRequest);

const flushRequest = new Request({
  flush: new RequestFlush(),
});

const flushRequestBytes = encodeRequest(flushRequest);

module.exports = {
  multiRequestBytes: Buffer.concat([infoRequestBytes, flushRequestBytes]),
  infoRequestBytes: infoRequestBytes,
  flushRequestBytes: flushRequestBytes,
  echoRequestBytes: Buffer.from('0e12050a03010203', 'hex'),
  infoRequest: infoRequest.toJSON(),
  infoResponse: {
    info: {
      data: 'test',
      version: '123',
      lastBlockHeight: 5,
      lastBlockAppHash: Buffer.alloc(0)
    }
  },
  infoResponseHex: '22220f0a0474657374120331323320052a00',
  emptyInfoResponseHex: '042200',
  flushResponseHex: '041a00',
  echoResponseHex: '0e12050a03010203',
  exceptionResponseHex: '2a0a130a114572726f723a2074657374206572726f72'
}
