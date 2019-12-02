

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

module.exports = takeUntil;




