
// FUNCTION IMPLEMENTATION eqArrays
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false
  }
  else { 
    
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
    
    
};


// FUNCTION IMPLEMENTATION assertArraysEqual
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1,arr2) === true) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  }
  else { 
  
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
    
    
};

// Function Im[plementation without
const without = function(arr1,arr2) {

  arr3 = arr1.filter(i => !arr2.includes(i))
  return arr3
}



assertArraysEqual(without([1, 2, 3], [1]),[2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"])

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without