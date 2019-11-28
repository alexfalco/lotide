// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1,object2) {
   obj1L = Object.keys(object1)
   obj2L = Object.keys(object2)
  
  if (obj1L.length !== obj2L.length) {
    return false
  }
  else { 

  for (const key of obj1L) {
   if ( object1[key] !== object2[key]) {
   return false
   }
}
return true
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false