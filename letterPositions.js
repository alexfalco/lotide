
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


const letterPositions = function(sentence) {
let cleanSentence = sentence.replace(/\s/g, "")
  
  const results = {};

  for(let i = 0; i < cleanSentence.length; i++) {
  console.log(cleanSentence[i])
   
   
      if (cleanSentence[i] in results) {
        results[cleanSentence[i]].push(i); 
      
      } else {
        results[cleanSentence[i]] = [i]
        
      }
    
  }
 
  
  return results;
};

console.log(letterPositions("hello"))
assertArraysEqual(letterPositions("hello").e, [1]);