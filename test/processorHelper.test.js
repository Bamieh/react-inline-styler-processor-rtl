import { inlineStylerRTLProccessorHelpers } from '../src'

describe('inlineStylerRTLProccessorHelpers', () => {
  const rtlHelpers = inlineStylerRTLProccessorHelpers(true)
  const ltrHelpers = inlineStylerRTLProccessorHelpers(false)
  const rtlAttributeValue = 'red';
  const ltrAttributeValue = 'blue';

  it('returns an object', () => {
    expect(rtlHelpers).to.be.an('object')
  })
  describe('onRTL', () => {
    it('is returned from helper', () => {
      expect(rtlHelpers).to.contain.keys('onRTL')
    })
    it('returns rtl style on rtl configs', () => {
      const {onRTL} = rtlHelpers;
      const value = onRTL(rtlAttributeValue, ltrAttributeValue);
      expect(value).to.equal(rtlAttributeValue)
    })
    it('returns ltr style on ltr configs', () => {
      const {onRTL} = ltrHelpers;
      const value = onRTL(rtlAttributeValue, ltrAttributeValue);
      expect(value).to.equal(ltrAttributeValue)
    })
  })
  describe('onlyRTL', () => {
    it('is returned from helper', () => {
      expect(rtlHelpers).to.contain.keys('onlyRTL')
    })
    it('returns rtl style on rtl configs', () => {
      const {onlyRTL} = rtlHelpers;
      const value = onlyRTL(rtlAttributeValue);
      expect(value).to.equal(rtlAttributeValue)
    })
    it('returns null on ltr configs', () => {
      const {onlyRTL} = ltrHelpers;
      const value = onlyRTL(rtlAttributeValue);
      expect(value).to.equal(null)
    })
  })
  describe('onlyLTR', () => {
    it('is returned from helper', () => {
      expect(rtlHelpers).to.contain.keys('onlyLTR')
    })
    it('returns ltr style on ltr configs', () => {
      const {onlyLTR} = ltrHelpers;
      const value = onlyLTR(ltrAttributeValue);
      expect(value).to.equal(ltrAttributeValue)
    })
    it('returns null on ltr configs', () => {
      const {onlyLTR} = rtlHelpers;
      const value = onlyLTR(ltrAttributeValue);
      expect(value).to.equal(null)
    })
  })
});