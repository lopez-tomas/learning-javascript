const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana',
}

// # Object.entries: it returns key-value pair of a matrix
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


// # Object.values: it returns an object values into an array
const values = Object.values(data);
console.log(values);
console.log(values.length);


// # Padding
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ------'));


// # Trailing commas
const obj = {
  name: 'Oscar',
};