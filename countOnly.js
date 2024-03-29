// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);


// FUNCTION IMPLEMENTATION


const countOnly = function(allItems, itemsToCount) {
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const results = {}

for (const item of allItems) {
  if (itemsToCount[item]) { 
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }

}

return results
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);


module.exports = countOnly