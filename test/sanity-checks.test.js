import processor from '../src'

describe('Sanity Checks:: Processor', () => {
  it('is exported as default', () => {
    // if you change the processor to stop exporting a default, this will trigger.
    expect(processor).to.equal(require('../src').default);
  })

  it('is a function', () => {
    expect(processor).to.be.a('function');
  })

  it('returns an object', () => {
    const processed = processor({}, {isRTL: false});
    expect(processed).to.be.an('object');
  });
});