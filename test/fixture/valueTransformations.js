const float = {
  describe: 'float',
  cases: [{
    input: 'float',
    value: 'start',
    expectedRTL: 'right',
    expectedLTR: 'left'
  }, {
    input: 'float',
    value: 'end',
    expectedRTL: 'left',
    expectedLTR: 'right'
  }]
}
const direction = {
  describe: 'direction',
  cases: [{
    input: 'direction',
    value: 'start',
    expectedRTL: 'rtl',
    expectedLTR: 'ltr'
  }, {
    input: 'direction',
    value: 'end',
    expectedRTL: 'ltr',
    expectedLTR: 'rtl'
  }]
}
const transformOrigin = {
  describe: 'transformOrigin',
  cases: [{
    input: 'transformOrigin',
    value: 'start',
    expectedRTL: 'right',
    expectedLTR: 'left'
  }, {
    input: 'transformOrigin',
    value: 'end',
    expectedRTL: 'left',
    expectedLTR: 'right'
  }]
}
const textAlign = {
  describe: 'textAlign',
  cases: [{
    input: 'textAlign',
    value: 'start',
    expectedRTL: 'right',
    expectedLTR: 'left'
  }, {
    input: 'textAlign',
    value: 'end',
    expectedRTL: 'left',
    expectedLTR: 'right'
  }, {
    input: 'textAlign',
    value: null,
    expectedRTL: undefined,
    expectedLTR: undefined,
  }, {
    input: 'textAlign',
    value: undefined,
    expectedRTL: undefined,
    expectedLTR: undefined,
  }, {
    input: 'textAlign',
    value: '',
    expectedRTL: undefined,
    expectedLTR: undefined,
  }]
}

export default [transformOrigin, direction, float, textAlign]