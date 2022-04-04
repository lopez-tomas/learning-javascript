// # Rest operator
const obj = {
  name: 'oscar',
  age: 32,
  country: 'MX',
}

let { country, ...all } = obj;
console.log(all);


// # Spread properties
const obj2 = {
  name: 'Oscar',
  age: 32
};

const obj3 = {
  ...obj2,
  country: 'MX',
}

console.log(obj3);