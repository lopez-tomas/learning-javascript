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