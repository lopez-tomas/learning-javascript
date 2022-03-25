const salariesCOL = colombia.map((person) => {
  return person.salary;
});

const salariesCOLSorted = salariesCOL.sort((salaryPrev, salaryNext) => salaryPrev - salaryNext);

const isEven = (number) => {
  return number % 2 === 0;
};

const arithmeticMean = (list) => {
  const sumList = list.reduce((prev, next) => prev + next, 0);

  const mean = sumList / list.length;
  return mean;
};

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

console.log(
  `Arithmetic mean of salaries in Colombia: $` + arithmeticMean(salariesCOL) + ` USD\n` +
  `Median of salaries in Colombia: $` + medianSalaries(salariesCOLSorted) + ` USD`
);