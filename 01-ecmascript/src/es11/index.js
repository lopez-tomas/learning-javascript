// # Dynamic imports
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});


// # Big INT = 2^53
const aBigNumber = 9007199254740991n;
const anotherBigIntNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigIntNumber);


// # Promise.allSettled()
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));


// # Global this
console.log(window);
console.log(globalThis);