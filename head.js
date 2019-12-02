const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION

const head = function(arr) {
  x = arr[0]
  return x 
  
  };

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "ello");

  module.exports = head;