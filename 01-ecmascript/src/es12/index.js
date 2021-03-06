// # replaceAll
const string = "JavaScript is wonderful! With JavaScript I can create the future of the web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);


// # Private methods for classes
class Message {
  show(value) {
    console.log(value);
  }
  #showPrivate(value) {
    console.log(value);
  }
  
  get #add(value) {
    ...
  }
}

const message = new Message();
message.show('Hello!');
message.showPrivate('Hello!');


// # Promise.any()
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response));


// # Weak reference
class AnyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
  { ... }
}


// # Logical AND, OR & nullish assignments
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

console.log(isTrue ||= isFalse);

isTrue = undefined;

console.log(isTrue ??= isFalse);