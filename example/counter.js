const { createServer } = require('@dashevo/abci');

const state = {
  count: 0,
};

// make sure the transaction data is 4 bytes long
function padTx(tx) {
  const buf = Buffer.alloc(4);
  tx.copy(buf, 4 - tx.length);
  return buf;
}

const handlers = {
  info(request) {
    return {
      data: 'Node.js counter app',
      version: '0.0.0',
      lastBlockHeight: 0,
      lastBlockAppHash: Buffer.alloc(0),
    };
  },

  checkTx(request) {
    const tx = padTx(request.tx);
    const number = tx.readUInt32BE(0);
    if (number !== state.count) {
      return { code: 1, log: 'tx does not match count' };
    }
    return { code: 0, log: 'tx succeeded' };
  },

  deliverTx(request) {
    const tx = padTx(request.tx);
    const number = tx.readUInt32BE(0);
    if (number !== state.count) {
      return { code: 1, log: 'tx does not match count' };
    }

    // update state
    state.count += 1;

    return { code: 0, log: 'tx succeeded' };
  },
};

const port = 26658;
createServer(handlers).listen(port, () => {
  console.log(`listening on port ${port}`);
});
