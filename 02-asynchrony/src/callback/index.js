function add(numA, numB) {
  return numA + numB;
}

function calculate(numA, numB, callback) {
  return callback(numA, numB);
}

console.log(calculate(6, 2, add));


function date(callback) {
  console.log(new Date);

  setTimeout(function () {
    let date = new Date()
    callback(date);
  }, 3000);
}

function printDate(date) {
  console.log(date);
}

date(printDate);