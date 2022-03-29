// Simple interest
function getInvestmentSimple() {
  return parseFloat(document.getElementById('investmentSimple').value);
}

function getInterestSimple() {
  return parseFloat(document.getElementById('interestRate').value);
}

function getYearsSimple() {
  return parseFloat(document.getElementById('years').value);
}

function simpleInterest(investment, interest, years) {
  return (investment * (interest / 100) * years);
}

let resultSimple = document.getElementById('resultSimple');

function calculateSimpleInterest() {
  const investment = getInvestmentSimple();
  const interest = getInterestSimple();
  const years = getYearsSimple();

  const simple = simpleInterest(investment, interest, years);
  resultSimple.innerHTML = `Simple: <span style="color: green;">+</span> $${simple.toFixed(2)} USD`;
}

// Compound interest
function getInvestmentCompound() {
  return parseFloat(document.getElementById('investmentCompound').value);
}

function getInterestCompound() {
  return parseFloat(document.getElementById('interestRateCompound').value);
}

function getCompoundings() {
  return parseFloat(document.getElementById('compoundings').value);
}

function getYearsCompound() {
  return parseFloat(document.getElementById('yearsCompound').value);
}

function compoundInterest(investment, interest, compoundings, years) {
  const interestPerc = interest / 100;
  const first = Math.pow(1 + interestPerc / compoundings, compoundings * years);

  return investment * first - investment;
}

let resultCompound = document.getElementById('resultCompound');

function calculateCompoundInterest() {
  const investment = getInvestmentCompound();
  const interest = getInterestCompound();
  const compoundings = getCompoundings();
  const years = getYearsCompound();

  const compound = compoundInterest(investment, interest, compoundings, years);
  resultCompound.innerHTML = `Compound: <span style="color: green;">+</span> $${compound.toFixed(2)} USD`;
}