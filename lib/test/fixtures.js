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
      RequestFinalizeBlock,
      ResponseFinalizeBlock,
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
    varint.encode(messageBytes.length),
  );

  return [lengthBytes, messageBytes];
}

const finalizeBlockRequest = new Request({
  finalizeBlock: new RequestFinalizeBlock({
    txs: [],
    byzantineValidators: [],
    // decidedLastCommit: CommitInfo { thresholdVoteExtensions: [] },
    hash: Buffer.from('79fa39557d29f9d0f1e40cc20c7e40ae69c1f582bc514c30395d0f65bcd5e607', 'hex'),
    // height: Long { low: 1, high: 0, unsigned: false },
    // time: Timestamp {
    //   seconds: Long { low: 1656943599, high: 0, unsigned: false },
    //   nanos: 474570673
    // },
    nextValidatorsHash: Buffer.from('e90e08de8e8f79dc1bf238a6e6daebd7b06efa87561ff25dc8a0a7c8afd3e11a', 'hex'),
    coreChainLockedHeight: 691,
    proposerProTxHash: Buffer.from('13423753dcb34aaee7e880c133a889c4adf0d115fa6dffb2aa31058e80eae530', 'hex'),
    proposedAppVersion: 0,
  }),
});

const finalizeBlockResponse = new Request({
  finalizeBlock: new ResponseFinalizeBlock({
    txResults: [],
    appHash: Buffer.alloc(20, 0),
  }),
});

const [finalizeBlockResponseDelimiter, finalizeBlockResponseBuffer] = encodeDelimited(
  Response,
  finalizeBlockResponse,
);

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

  finalizeBlock: {
    request: {
      object: finalizeBlockRequest,
      bufferWithDelimiter: Buffer.concat(encodeDelimited(Request, finalizeBlockRequest)),
    },
    response: {
      object: finalizeBlockResponse,
      buffer: finalizeBlockResponseBuffer,
      delimiter: finalizeBlockResponseDelimiter,
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
