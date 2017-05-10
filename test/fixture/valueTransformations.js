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

export default [transformOrigin, direction, float]