// # Geometric figures functions #
// Square code
const squarePerimeter = side => {
  return side * 4;
}

const squareArea = side => {
  return side ** 2;
}

// Triangle code
const trianglePerimeter = (side1, side2, base) => {
  return side1 + side2 + base;
}

const triangleArea = (base, height) => {
  return (base * height) / 2; 
}

// Circle code
const circleDiameter = radius => {
  return radius * 2;
}

const PI = Math.PI;

const circlePerimeter = radius => {
  const diameter = circleDiameter(radius);
  return diameter * PI;
}

const circleArea = radius => {
  return (radius ** 2) * PI;
}

// # Geometric figures <-> HTML #
// Square <-> HTML
function getSquareSide() {
  return parseFloat(document.getElementById('squareSide').value);
}

function calculateSquarePerimeter() {
  const squareSide = getSquareSide();

  alert(squarePerimeter(squareSide));
  return squarePerimeter(squareSide);
}

function calculateSquareArea() {
  const squareSide = getSquareSide();

  alert(squareArea(squareSide));
  return squareArea(squareSide);
}

// Triangle <-> HTML
function getSides() {
  let sides = {};
  const sideA = parseFloat(document.getElementById('triangleSideA').value);
  const sideB = parseFloat(document.getElementById('triangleSideB').value);
  const base = parseFloat(document.getElementById('triangleBase').value);
  const height = parseFloat(document.getElementById('triangleHeight').value);

  sides["sideA"] = sideA;
  sides["sideB"] = sideB
  sides["base"] = base;
  sides["height"] = height;

  return sides;
}

function calculateTrianglePerimeter() {
  const sides = getSides();
  const sideA = sides["sideA"];
  const sideB = sides["sideB"];
  const base = sides["base"];

  alert(trianglePerimeter(sideA, sideB, base));
  return trianglePerimeter(sideA, sideB, base);
}

function calculateTriangleArea() {
  const sides = getSides();
  const base = sides["base"];
  const height = sides["height"];

  alert(triangleArea(base, height));
  return triangleArea(base, height);
}

// Circle <-> HTML
function getRadius() {
  return parseFloat(document.getElementById('circleRadius').value);
}

function calculateCircleDiameter() {
  const radius = getRadius();

  alert(circleDiameter(radius));
  return circleDiameter(radius);
}

function calculateCirclePerimeter() {
  const perimeter = circleDiameter(getRadius());

  alert(circlePerimeter(perimeter));
  return circlePerimeter(perimeter);
}

function calculateCircleArea() {
  const radius = getRadius();

  alert(circleArea(radius));
  return circleArea(radius);
}