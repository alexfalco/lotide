

// FUNCTION IMPLEMENTATION assertEqual
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);


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

let x1 = [1]
let x2 = [1,3]
let x3 = [1]
let x4 = [1]
let x5 = [1]
let x6 = [2]
let x7 = [1,2,3,4,5]
let x8 = [1,2,3,4,6]
let x9 = [1,2,3,4,6]
let x10 = [1,2,3,4,"6"]

console.log(eqArrays(x1,x2))
console.log(x1)
console.log(x2)

console.log(eqArrays(x3,x4))
console.log(x3)
console.log(x4)

console.log(eqArrays(x5,x6))
console.log(x5)
console.log(x6)

console.log(eqArrays(x7,x8))
console.log(x7)
console.log(x8)

console.log(eqArrays(x9,x10))
console.log(x9)
console.log(x10)

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(x1,x2), true); 

