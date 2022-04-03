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
let { name, age } = person;
console.log(name, age);


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