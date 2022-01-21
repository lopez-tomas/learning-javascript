const triangleSideA = document.getElementById('triangleSideA');
const triangleSideB = document.getElementById('triangleSideB');
const triangleBase = document.getElementById('triangleBase');

const triangleHeightButton = document.getElementById('triangleHeight');
const trianglePerimeterButton = document.getElementById('trianglePerimeter');
const triangleAreaButton = document.getElementById('triangleArea');

let triangleResult = document.getElementById('triangleResult');
let triangleResult2 = document.getElementById('triangleResult2');
let triangleResult3 = document.getElementById('triangleResult3');

function getSides() {
  let sides = {};
  const sideA = parseFloat(document.getElementById('triangleSideA').value);
  const sideB = parseFloat(document.getElementById('triangleSideB').value);
  const base = parseFloat(document.getElementById('triangleBase').value);

  sides["sideA"] = sideA;
  sides["sideB"] = sideB
  sides["base"] = base;
  
  triangleResult.style.fontSize = "1rem";
  triangleResult.style.color = "white";

  return sides;
}

function getTriangleUnit() {
  return document.getElementById('triangleUnit').value;
}

function errorTriangleMessage() {
    triangleResult.style.color = "red";
    triangleResult.innerText = "That triangle doesn't exist.";
}

export {
    getSides,
    getTriangleUnit,
    triangleSideA,
    triangleSideB,
    triangleBase,
    triangleHeightButton,
    trianglePerimeterButton,
    triangleAreaButton,
    triangleResult,
    triangleResult2,
    triangleResult3,
    errorTriangleMessage
};