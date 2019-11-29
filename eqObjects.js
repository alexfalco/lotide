// FUNCTION IMPLEMENTATION assertEqual
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1,object2) {
   let obj1L = Object.keys(object1)
   let obj2L = Object.keys(object2)
  
  if (obj1L.length !== obj2L.length) {
    return false
  }

  else {
    for (const key of obj1L) {
      console.log(object1[key])
      if (object1[key].isArray) {
        if(eqArrays(object1[key],object2[key]) === false){
          
          return false
          
        }
        //else {
          // return true
        //}
        
    }
      else {
        if ( object1[key] !== object2[key]){
        return false
        }
        //else {
          //return true
        //}
      }
    } 
  } return true
} 
  

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
