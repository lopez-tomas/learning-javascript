// # Rest operator
const obj = {
  name: 'oscar',
  age: 32,
  country: 'MX',
}

let { country, ...all } = obj;
console.log(all);