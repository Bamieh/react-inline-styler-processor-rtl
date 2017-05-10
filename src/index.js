'use strict'
import invariant from 'invariant';

const reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
const reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;
const UNDEFINED_IS_RTL_ERROR = "isRTL is undefined. isRTL should be supplied to the configurations of the react-inline-styler Provider component"

const maybeUpperCaseFirst = (str, cond) => {
  return cond? str.charAt(0).toUpperCase() + str.substring(1) : str;
}


const startEndReplacer = (str, {startReplacement, endReplacement}) => {
  return str.replace(/(s|S)tart|(?:e|E)nd/, (match, isStart, index) => {
    const replacement = isStart? startReplacement : endReplacement,
          shouldUpperCase = index > 0;
    return maybeUpperCaseFirst(replacement, shouldUpperCase)
  });
}

const getLeftRightRepalcements = (isRTL) => ({
  startReplacement: isRTL? 'right' : 'left',
  endReplacement: isRTL? 'left' : 'right',
});

const getDirectionReplacements = (isRTL) => ({
  startReplacement: isRTL? 'rtl' : 'ltr',
  endReplacement: isRTL? 'ltr' : 'rtl',
});

const attributeKeyReplacementFactory = isRTL => {
  const leftRightReplacements = getLeftRightRepalcements(isRTL)
  return key => startEndReplacer(key, leftRightReplacements)
}

const attributeValueReplacementFactory = (isRTL) => {
  const leftRightReplacements = getLeftRightRepalcements(isRTL)
  const directionReplacements = getDirectionReplacements(isRTL)

  return (attrubuteKey, attrubuteValue) => {
    switch (attrubuteKey) {
      // case 'textAlign':
      case 'float':
      case 'transformOrigin':
        return startEndReplacer(attrubuteValue, leftRightReplacements);

      case 'direction':
        return startEndReplacer(attrubuteValue, directionReplacements);

      // case 'transform':
        // let matches, newValue = attrubuteValue;
        // if ((matches = newValue.match(reTranslate))) {
        //   newValue = newValue.replace(matches[0], matches[1] + (-parseFloat(matches[4])) );
        // }
        // if ((matches = newValue.match(reSkew))) {
        //   newValue = newValue.replace(matches[0], matches[1] + (-parseFloat(matches[4])) + matches[5] +
        //     matches[6] ? `, ${(-parseFloat(matches[7])) + matches[8]}` : ''
        //   );
        // }
        // return newValue;
      default:
        return attrubuteValue
    }
  }
}


export const inlineStylerRTLProccessorHelpers = (isRTL) => {
  const onRTL = (rtlStyle, lrtStyle) => isRTL? rtlStyle : lrtStyle;
  return {
    onlyRTL: (rtl) => onRTL(rtl, null),
    onlyLTR: (lrt) => onRTL(null, lrt),
    onRTL,
  }
}


export default function processor(styleObject, configurations) {
  const {isRTL} = configurations;
  invariant(typeof isRTL !== "undefined", UNDEFINED_IS_RTL_ERROR);

  const transformAttributeKey = attributeKeyReplacementFactory(isRTL);
  const transformAttributeValue = attributeValueReplacementFactory(isRTL);
  return Object.entries(styleObject).reduce((acc, [key, value]) => {
    const transformedKey = transformAttributeKey(key);
    const transformedValue = transformAttributeValue(key, value);

    return Object.assign(acc, {
      [transformedKey]: transformedValue
    })
  }, {});
}


