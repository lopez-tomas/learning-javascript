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


// # Promise.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Completed'));