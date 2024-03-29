

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



const words = ["ground", "control", "to", "major", "tom"];


const map = function(array,callback) {
  
const results = []

for (let item of array) {
results.push(callback(item))
}
return results


}


module.exports = map