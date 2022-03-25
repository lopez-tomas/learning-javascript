const salariesCOL = colombia.map((person) => {
  return person.salary;
});

/**
 * It receives a list of objects Person{name, salary} and returns a new list with the salary only.
 * @param {Array<Object{name, salary}} list - a list of objects with name and salary
 * @returns Array<Number>
 */
const obtainSalariesFromList = (list) => {
  const salaries = list.map((person) => {
    return person.salary;
  });

  return salaries;
};

/**
 * It receives a list of salaries and returns a new one sorted.
 * @param {Array<Number>} list - a list of salaries
 * @returns Array<Number>
 */
const sortSalaries = (list) => {
  const salariesSorted = list.sort((salaryPrev, salaryNext) => salaryPrev - salaryNext);

  return salariesSorted;
}

const salariesCOLSorted = salariesCOL.sort((salaryPrev, salaryNext) => salaryPrev - salaryNext);

/**
 * It returns TRUE if number is an even number or FALSE if not.
 * @param {Number} number
 * @returns Bool
 */
const isEven = (number) => {
  return number % 2 === 0;
};

/**
 * It returns the arithmetic mean of a list of salaries.
 * @param {Array<Number>} list - a list of salaries
 * @returns Number
 */
const arithmeticMean = (list) => {
  const sumList = list.reduce((prev, next) => prev + next, 0);

  const mean = sumList / list.length;
  return mean;
};

/**
 * It returns the median value of an ordered list of salaries.
 * @param {Array<Number>} list - an ordered list of salaries
 * @returns Number
 */
const medianSalaries = (list) => {
  const half = parseInt(list.length / 2);

  if (isEven(list.length)) {
    const halfPersonA = list[half - 1];
    const halfPersonB = list[half];

    const median = arithmeticMean([halfPersonA, halfPersonB]);
    return median;
  } else {
    const halfPerson = list[half];
    return halfPerson;
  }
};

const generalMedian = medianSalaries(salariesCOLSorted);

console.log(
  `Arithmetic mean of salaries in Colombia: $` + arithmeticMean(salariesCOL) + ` USD\n` +
  `Median of salaries in Colombia: $` + medianSalaries(salariesCOLSorted) + ` USD`
);