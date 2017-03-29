# react-inline-styler-processor-rtl

(Right to left / left to right) dynamic inline styles processing.

RTL processor for React inline styler [react-inline-styler](https://github.com/Bamieh/react-inline-styler)


This processor adds new syntax for the inline styles mainly, "start" and "end" which are dynamically changed to left or right depending on the wanted app language direction, by specifing `isRTL` in the `ReactInlineStylerProvider`.


# Getting started

```
npm install react-inline-styler-processor-rtl
```

# Example Usage

```
//App.js

import rtlProcessor from 'react-inline-styler-processor-rtl'
// or var rtlProcessor = require('react-inline-styler-processor-rtl')

const pipeline = [rtlProcessor];
const configs = {isRTL: true};

<ReactInlineStylerProvider configs={configs} pipeline={pipeline}>
</ReactInlineStylerProvider>
```

```
//styles.js
const styles = function() {
  return {
    rootStyle: {
      float: 'start',
      paddingStart: ...
    }
  }
}
```

# Localization list

localizing styles happens on the key of the attibute, or its value. in LTR configurations start is translated into "left" and "end" is translated into "right". in RTL, the other way around. 

### Localed Values

1. float

```
{
  float: 'start',
  float: 'end',
}
```

2. direction

```
{
  direction: 'start',
  direction: 'end',
}
```

3. transformOrigin

```
{
  transformOrigin: 'start',
  transformOrigin: 'end',
}
```


4. transform
```
{
  transform: translate
  transform: skew
}
```

### Localed Keys

1. margins and paddings

```
{
  marginStart: ...
  marginEnd: ...
  paddingStart: ...
  paddingEnd: ...
}
```

2. positions
```
{
  start: ...
  end: ...
}
```

3. borders

```
{
  borderStart: ...
  borderStartWidth: ...
  borderStartStyle: ...
  borderStartColor: ...
  borderEnd: ...
  borderEndWidth: ...
  borderEndStyle: ...
  borderEndColor: ...
}
```


4. borderRadius
```
{
  borderTopStartRadius: ...
  borderTopEndRadius: ...
  borderBottomStartRadius: ...
  borderBottomEndRadius: ...
}
```



