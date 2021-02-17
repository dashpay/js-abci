const { DuplexMock } = require('stream-mock');

describe('Connection', () => {
  it('should handle request', () => {

  });
  it('should handle many requests');
  it('should not handle next request until the first one is not handled');
  it('should emit MaxRequestSizeError and destroy socket if request is bigger than max limit');
  it('should wait for more data if request is not buffered completely');
  it('should emit UnableToParseRequestError and destroy socket on request parse error');
  it('should not handle requests if stream is destroyed');
  it('should not read data since handler is running');
  it('should throw error if handler throws');
  it('should write error and destroy socket if handler responds with ResponseExceptionError');
  it('should destroy socket if can\'t write ResponseExceptionError');
  it('should write flush response with flush acknowledgment');
  it('should destroy socket if can\'t write response');
});
