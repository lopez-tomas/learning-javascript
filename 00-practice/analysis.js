import { roiButton, simpleButton, compoundButton } from './helpers/salaries-elements.js';
import { showROISection, showSimpleSection, showCompoundSection } from './helpers/show-sections.js';

roiButton.onclick = showROISection;
simpleButton.onclick = showSimpleSection;
compoundButton.onclick = showCompoundSection;

/* HELPERS */

/**
 * It receives a list of salaries and returns a new one sorted.
 * @param {Array<Number>} list - a list of salaries
 * @returns Array<Number>
 */
const sortSalaries = (list) => {
  const salariesSorted = list.sort((salaryPrev, salaryNext) => salaryPrev - salaryNext);

  return salariesSorted;
}

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

const obtainSliceStart = (list, top) => {
  return (list.length * (100 - top)) / 100;
}

/**
 * It receives a list of objects {name, salary} and returns a new list with the salary only.
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
 * It returns a new array with the TOP 10% salaries.
 * @param {Array<Number>} list - an ordered list of salaries
 * @returns Arrray<Number>
 */
const obtainTop10SalariesFromList = (list) => {
  const start = obtainSliceStart(list, 10);
  const top = list.slice(start, list.length);

  return top;
}


/* Calculate MEDIAN */

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


/* TEST with Colombia list */

const salariesCOL = obtainSalariesFromList(colombia);
const salariesCOLSorted = salariesCOL.sort((salaryPrev, salaryNext) => salaryPrev - salaryNext);
const salariesTop10COL = obtainTop10SalariesFromList(salariesCOLSorted);

const generalMedian = medianSalaries(salariesCOLSorted);
const top10Median = medianSalaries(salariesTop10COL);

console.log(salariesCOLSorted);
console.log(salariesTop10COL);

console.log(
  `The General Median of salaries in Colombia is: $` + generalMedian + ` USD\n` +
  `The Median of the TOP 10% salaries in Colombia is: $` + top10Median + ` USD`
);