// # Array.flat: it returns a matrix with any matrix but flattened.
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2)); // flat(deepness)


// # Array.flatMap: map each element through a function and flatten the result
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));