function getReturn() {
  return parseFloat(document.getElementById('return').value);
}

function getInvestment() {
  return parseFloat(document.getElementById('investment').value);
}

function roi(returning, investment) {
  return ((returning - investment) / investment) * 100;
}

let resultROI = document.getElementById('resultROI');

function calculateROI() {
  const returning = getReturn();
  const investment = getInvestment();

  const roiValue = roi(returning, investment);
  resultROI.innerText = `ROI: %${roiValue.toFixed(2)}`;
}