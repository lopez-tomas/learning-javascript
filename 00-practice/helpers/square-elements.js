const squareSection = document.querySelector('.square-section');
const squareButton = document.getElementById('square');

const squareSide = document.getElementById('squareSide');

const squarePerimeterButton = document.getElementById('squarePerimeter');
const squareAreaButton = document.getElementById('squareArea');

let squareResult = document.getElementById('squareResult');

function getSquareSide() {
  squareResult.style.color = "white";
  squareResult.style.fontSize = "1rem";
  return parseFloat(document.getElementById('squareSide').value);
}

function getSquareUnit() {
  return document.getElementById('squareUnit').value;
}

export {
  getSquareSide,
  getSquareUnit,
  squareSection,
  squareButton,
  squareSide,
  squarePerimeterButton,
  squareAreaButton,
  squareResult
};