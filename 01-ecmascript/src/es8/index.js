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

// Async Await example:
const prepareIceCream = money => {
  return new Promise((resolve, reject) => {
    if (money >= 500) {
      setTimeout(() => console.log('We are preparing your ice cream...'), 2000);

      setTimeout(() => resolve('Here you are, a delicious ice cream!'), 6000);
    } else {
      setTimeout(() => reject('Sorry! You do not have enough money :('), 2000);
    }
  });
}

const buyIceCream = async money => {
  try {
    console.log('Welcome to Ice Cream World!');
    const result = await prepareIceCream(money);

    console.log(result);

    console.log('Thanks for your purchase!');
  } catch (err) {
    console.log(err);
  }
}

buyIceCream(500);