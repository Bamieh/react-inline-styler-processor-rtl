const marginsAndPaddings = {
  describe: 'margins and paddings',
  cases: [{
    input: 'marginStart',
    expectedRTL: 'marginRight',
    expectedLTR: 'marginLeft'
  }, {
    input: 'marginEnd',
    expectedRTL: 'marginLeft',
    expectedLTR: 'marginRight'
  },{
    input: 'paddingStart',
    expectedRTL: 'paddingRight',
    expectedLTR: 'paddingLeft'
  }, {
    input: 'paddingEnd',
    expectedRTL: 'paddingLeft',
    expectedLTR: 'paddingRight'
  }]
};
const positions = {
  describe: 'positions',
  cases: [{
    input: 'start',
    expectedRTL: 'right',
    expectedLTR: 'left'
  }, {
    input: 'end',
    expectedRTL: 'left',
    expectedLTR: 'right'
  }]
}
const borders = {
  describe: 'borders',
  cases: [{
    input: 'borderStart',
    expectedRTL: 'borderRight',
    expectedLTR: 'borderLeft'
  },{
    input: 'borderStartWidth',
    expectedRTL: 'borderRightWidth',
    expectedLTR: 'borderLeftWidth'
  },{
    input: 'borderStartStyle',
    expectedRTL: 'borderRightStyle',
    expectedLTR: 'borderLeftStyle'
  },{
    input: 'borderStartColor',
    expectedRTL: 'borderRightColor',
    expectedLTR: 'borderLeftColor'
  },{
    input: 'borderEnd',
    expectedRTL: 'borderLeft',
    expectedLTR: 'borderRight'
  },{
    input: 'borderEndWidth',
    expectedRTL: 'borderLeftWidth',
    expectedLTR: 'borderRightWidth'
  },{
    input: 'borderEndStyle',
    expectedRTL: 'borderLeftStyle',
    expectedLTR: 'borderRightStyle'
  },{
    input: 'borderEndColor',
    expectedRTL: 'borderLeftColor',
    expectedLTR: 'borderRightColor'
  }]
}
const borderRadius = {
  describe: 'borderRadius',
  cases: [{
    input: 'borderTopStartRadius',
    expectedRTL: 'borderTopRightRadius',
    expectedLTR: 'borderTopLeftRadius'
  },{
    input: 'borderTopEndRadius',
    expectedRTL: 'borderTopLeftRadius',
    expectedLTR: 'borderTopRightRadius'
  },{
    input: 'borderBottomStartRadius',
    expectedRTL: 'borderBottomRightRadius',
    expectedLTR: 'borderBottomLeftRadius'
  },{
    input: 'borderBottomEndRadius',
    expectedRTL: 'borderBottomLeftRadius',
    expectedLTR: 'borderBottomRightRadius'
  }]
}

export default [marginsAndPaddings,positions,borders,borderRadius]