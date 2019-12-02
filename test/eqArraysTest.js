
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');



let x1 = 'C'
let x2 = 'D'

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(x1,x2), true); 

