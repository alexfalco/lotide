
// // FUNCTION IMPLEMENTATION eqArrays
// const eqArrays = function(arr1, arr2) {

//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   else { 
    
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) return false;
//     }
//     return true;
//   }
    
    
// };


// // FUNCTION IMPLEMENTATION assertArraysEqual
// const assertArraysEqual = function(arr1, arr2) {

//   if (eqArrays(arr1,arr2) === true) {
//     console.log(`Assertion Passed: ${arr1} === ${arr2}`);
//   }
//   else { 
  
//     console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
//   }
    
    
// };



// FUNCTION IMPLEMENTATION middle

const middle = function(arr1) {
let x = []
let y = Math.floor(arr1.length/2)

  if (arr1.length <= 2) {
     return x
  }
   else if (arr1.lenght % 2 !== 0) {
    x.push(arr1[y])
    return x
   } 
   else { 
    x.push(arr1[y], arr1[y],)
   
    return x
  }
}

module.exports = middle


