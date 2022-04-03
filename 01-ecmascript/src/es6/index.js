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