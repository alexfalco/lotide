// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const takeUntil = require('./takeUntil');


const without = require('./without');
const map = require('./map');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const countLetters = require('./countletters');
const assertObjectEqual = require('./assertObjectEqual');

module.exports = {
head:   head,
tail,
middle,
takeUntil,
without,
map,
findKeyByValue,
findKey,
eqObjects,
countOnly,
countLetters,
assertObjectEqual,
};