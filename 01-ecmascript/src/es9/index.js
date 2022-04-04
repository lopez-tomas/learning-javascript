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


// # Grouping Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const yearG = match[1];
const monthG = match[2];
const dayG = match[3];

console.log(yearG, monthG, dayG);


// # Regex naming
const regexDataNamed = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const matchNamed = regexDataNamed.exec('2022-04-04');
const { year, month, day } = matchNamed.groups;

console.log(year, month, day);