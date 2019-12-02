

// FUNCTION IMPLEMENTATION eqObjects
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




// FUNCTION IMPLEMENTATION
const assertObjectEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1,obj2) === true) {
    console.log(`Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
  else { 
  
    console.log(`Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
    
  
};


assertObjectEqual({1:2,3:4},{1:2,3:4})

module.exports = assertObjectEqual