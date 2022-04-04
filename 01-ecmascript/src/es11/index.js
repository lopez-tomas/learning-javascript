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