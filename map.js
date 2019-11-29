

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



const results1 = map(words, word => word[0]);
console.log(results1);


words1 = ['123','456','789']
words2 = ['214','84567','57466']
words3 = ['345','5655','4454']

const arr1 = map(words1, word => word[0])
const arr2 = map(words2, word => word[1])
const arr3 = map(words3, word => word[2])

console.log(arr1)

assertArraysEqual(arr1,arr2)
assertArraysEqual(arr1,arr3)
assertArraysEqual(arr2,arr3)