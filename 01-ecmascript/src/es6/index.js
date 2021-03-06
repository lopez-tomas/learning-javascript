// # Default params
// Before ES6
function newFunction(name, age, country) {
  var name = name || 'Tomás';
  var age = age || 23;
  var country = country || 'AR';
  console.log(name, age, country);
}

// ES6
function newFunction2(name = 'Tomás', age = 23, country = "AR") {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Oscar', 32, 'MX');


// # Template literals
// Before ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


// # Multiline
// Before ES6
let lorem = "Lorem ipsum dolor sit amet, consectet \n"
  + "other epic phrase we need.";
console.log(lorem);

// ES6
let lorem2 = `Other epic phrase we need.
Now, it's other epic phrase.
  `;
console.log(lorem2);


// # Destructuring
let person = {
  'name': 'Tomás',
  'age': 23,
  'country': 'AR'
};

// Before ES6
console.log(person.name, person.age, person.country);

// ES6
//let { name, age } = person;
//console.log(name, age);


// # Spread Operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// Before ES6
let players = ['David', 'Andrea', 'Oscar', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila'];

// ES6
let players2 = ['David', 'Andrea', ...team1, ...team2];
console.log(players2);


// # let & const
// Before ES6
var helloVar = 'hello'; // global variable

{
  var globalVar = "Global VAR";
}

// ES6
{
  let globalLet = "Global LET";
  console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet);


// # const
// Before ES6
var aVar = 'b';
aVar = 'a';
console.log(aVar);

// ES6
const aConst = 'b';
aConst = 'a';
console.log(aConst);


// # Objects
let name = "Tomás";
let age = 23;

// Before ES6
obj = { name: name, age: age };
console.log(obj);

// ES6
obj2 = { name, age };
console.log(obj2);


// # Arrow functions
const names = [
  {name: "Tomás", age: 32},
  {name: 'Yesica', age: 27}
];

// Before ES6
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

// ES6
let listOfNames2 = names.map(item => console.log(item.name));

//const listOfNames3 = (name, age, country) => {
  //...
//};

//const listOfNames4 = name => {
  //...
//}

//const square = num => num * num;


// # Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!');
    }
  });
};

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));


// # Classes
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  
  add(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 2));


// # Export & Import
// Before ES6 (Code Runner without Babel)
const helloImported = require('./module');

// ES6 (Code Runner with Babel)
//import hello from './module';
console.log(helloImported());


// # Generators: special function that return a certain value
// according to the defined algorithm
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

function* fibonacci() {
  let first = 1;
  let second = 1;

  while (true) {
    let current = second;
    second = first;
    first = first + current;
    
    let reset = yield current;
    
    if (reset) {
      first = 1;
      second = 1;
    }
  }
};

const secuence = fibonacci();
console.log(secuence.next().value);
console.log(secuence.next().value);
console.log(secuence.next().value);
console.log(secuence.next().value);
console.log(secuence.next().value);
console.log(secuence.next().value);
console.log(secuence.next().value);
console.log(secuence.next().value);
console.log(secuence.next().value);