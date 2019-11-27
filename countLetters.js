// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


//steps
// 1. Create function countLetters with 1 argument ("str")
// 2. clean the string "str", remove spaces
// 3. create an empty object ("results")
// 4. loop str:
  // for each new letter add a new key to the object "results"
  // keep a update count for each letter

// input: String that is the only argument of the function 
// output: object with a letter as key and count as value


const countLetters = function(str) {

  let cleanStr = str.replace(/\s/g, "")
  const results = {}
   
  for (const item of cleanStr) {
   
      if (results[item]) {
        
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    
  }

  return results

}

console.log(countLetters("sfijgg gfg g gfgdg dhyyee"))