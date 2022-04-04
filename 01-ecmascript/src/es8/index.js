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


// # Async Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test error'))
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.err(error);
  }
}

anotherFunction();