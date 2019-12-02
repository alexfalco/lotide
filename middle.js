
// // FUNCTION IMPLEMENTATION eqArrays
// const eqArrays = function (arr1, arr2) {

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
// const assertArraysEqual = function (arr1, arr2) {

//   if (eqArrays(arr1, arr2) === true) {
//     console.log(`Assertion Passed: ${arr1} === ${arr2}`);
//   }
//   else {

//     console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
//   }


// };



// FUNCTION IMPLEMENTATION middle

const middle = function (arr1) {
  let x = []
  let y = Math.floor((arr1.length) / 2)
  let z = arr1.length / 2
  let z1 = z + 1
  console.log('z :', z)
  console.log('z1 :', z1)

  if (arr1.length <= 2) {
    console.log('1st')
    return x
  }
  else if (arr1.length % 2 !== 0) {
    console.log('2nd')
    x.push(arr1[y])
    return x
  }
  else {
    console.log('3rd')
    x.push(arr1[z]-1, arr1[z1]-1)
    console.log('x :', x)
    return x
  }

}

console.log(middle([1, 2, 3, 4]))



module.exports = middle


