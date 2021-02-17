describe('handleRequestFactory', () => {
  it('should respond with flush');
  it('should respond with echo');
  it('should respond with with empty message if handler is not defined');
  it('should respond handler message');
  it('should throw ResponseExceptionError if handler is errored');
  it('should throw InvalidAbciResponseError if message is not valid');
});
