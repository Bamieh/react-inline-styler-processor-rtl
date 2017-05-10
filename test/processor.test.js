import processor from '../src'
import keyTransformations from './fixture/keyTransformations'
import valueTransformations from './fixture/valueTransformations'

describe('RTL Processor', () => {
    const processRTL = (style) => processor(style, {isRTL: true})
    const processLTR = (style) => processor(style, {isRTL: false})
    const processUndefined = (style) => processor(style, {})

  it('fails if no isRTL is passed to configs', () => {
    expect(processUndefined).to.throw();
  });

  describe('Value Transformations', () => {
    valueTransformations.map(transformation => {
      describe(transformation.describe, () => {
        transformation.cases.map(({input, value, expectedRTL, expectedLTR}) => {
          it(`${input}: ${value}`, () => {
            expect(processRTL({ [input]: value })).to.have.property(input, expectedRTL)
            expect(processLTR({ [input]: value })).to.have.property(input, expectedLTR)
          })
        })
      })
    })
  })
  describe('Key Transformations', () => {
    keyTransformations.map(transformation => {
      describe(transformation.describe, () => {
        transformation.cases.map(({input, expectedRTL, expectedLTR}) => {
          it(input, () => {
            expect(processRTL({ [input]: 5 })).to.contain.keys(expectedRTL)
            expect(processLTR({ [input]: 5 })).to.contain.keys(expectedLTR)
          })
        })
      })
    })
  });
});