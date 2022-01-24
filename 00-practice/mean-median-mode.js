function calculateArithmeticMean(list) {
  const sumList = list.reduce((prev, next) => prev + next, 0);

  const mean = sumList / list.length;
  return mean;
}