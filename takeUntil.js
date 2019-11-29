

// output est une slice du array en parametre
// cette slice comment a index 0
// ajoute les elements jusqu'a atteindre un critere
// cette slice termine lorsque le critere est atteint
// ce critere est atteint lorsque le return du callback est truthy

const takeUntil = function(array, callback) {
  const x = []
  
  for (let item of array) {
  
    if (!callback(item)) {
  x.push(item)
    }
    else return x
  }

 return x 
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [1, 2, 5, 7, 2, 2, 4, 5];
const results3 = takeUntil(data3, x => x < 0);
console.log(results3);

console.log('---');




