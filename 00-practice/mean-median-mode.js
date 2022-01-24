const list1 = [
  300,
  600,
  100,
  800,
  500,
  400000000,
];

function arithmeticMean(list) {
  const sumList = list.reduce((prev, next) => prev + next, 0);

  const mean = sumList / list.length;
  return mean;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }

  return false;
}

function median(list) {
  const orderedList = list.slice().sort((a, b) => a - b);
  const listLength = list.length;

  const half = parseInt(listLength / 2) - 1;
  const element1 = orderedList[half];
  const element2 = orderedList[half + 1];

  let median;

  if (isEven(listLength)) {
    median = arithmeticMean([element1, element2]);
  } else {
    median = list[half];
  }

  return median;
}