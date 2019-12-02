const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middle([1,2,3]),[2])
assertArraysEqual(middle([0]),[0])
assertArraysEqual(middle([1,2,3]),[3])
