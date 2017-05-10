require('babel-register')();
process.env.NODE_ENV = 'test';

var jsdom = require('jsdom').jsdom;

import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);

global.chai = chai;
global.expect = chai.expect;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

