const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


describe("#middle", () => {
  
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [0] for [0]", () => {
    assert.deepEqual(middle([0]), []);
  });
});

// assertArraysEqual(middle([1,2,3]),[2])
// assertArraysEqual(middle([0]),[0])
// assertArraysEqual(middle([1,2,3]),[3])
