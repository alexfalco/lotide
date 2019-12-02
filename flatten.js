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

// Function Im[plementation flatten
const flatten = function (array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if (Array.isArray(element)) {
      for (let index = 0; index < element.length; index++) {
        const sub_element = element[index];
        newArray.push(sub_element);
      }
    }
    else {
      newArray.push(element);
    }
  }
  return newArray;
};
module.exports = flatten;



assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6])

console.log(flatten([1, 2, [3, 4], 5, [6]]))

module.exports = flatten