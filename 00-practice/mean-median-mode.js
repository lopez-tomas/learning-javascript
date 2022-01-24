const list1 = [
  300,
  600,
  100,
  800,
  500,
  400000000,
];

const list2 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];

const list3 = [
  "hola",
  "hola",
  "chau",
  "github",
  "javascript",
  "javascript",
  "hola",
  "chau",
  "chau",
  "chau",
  "hola",
  "chau",
  "hola",
];

function arithmeticMean(list) {
  const sumList = list.reduce((prev, next) => prev + next, 0);

  const mean = sumList / list.length;
  return mean;
}

function geometricMean(list) {
  const productList = list.reduce((prev, next) => prev * next);
  const listLength = list.length;

  const mean = productList ** (1 / listLength);
  return mean;
}

function harmonicMean(list) {
  const inverseSumList = list.reduce((prev, next) => (1/prev) + (1/next));
  const listLength = list.length;

  const mean = listLength / inverseSumList;
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

function mode(list) {
  const countList = {}

  list.map(element => {
    if (countList[element]) {
      countList[element]++;
    } else {
      countList[element] = 1;
    }
  });

  const countListToArray = Object.entries(countList).sort(
    (prev, next) => {
      return next[1] - prev[1]
    }
  );

  const maxQuantity = countListToArray[0][1];
  const maxArray = countListToArray.filter(element => element[1] === maxQuantity);

  return maxArray;
}