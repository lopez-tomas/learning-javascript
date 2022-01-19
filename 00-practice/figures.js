// Square code
console.group("Square");

const squarePerimeter = side => {
  return side * 4;
}

const squareArea = side => {
  return side ** 2;
}

console.groupEnd();

// Triangle code
console.group("Triangle");

const trianglePerimeter = (side1, side2, base) => {
  return side1 + side2 + base;
}

const triangleArea = (base, height) => {
  return (base * height) / 2; 
}

console.groupEnd();

// Circle code
console.group("Circle");

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

console.groupEnd();

// Square <-> HTML
function getSquareSide() {
  return document.getElementById('squareSide').value;
}

function calculateSquarePerimeter() {
  const squareSide = getSquareSide();
  return squarePerimeter(squareSide);
}

function calculateSquareArea() {
  const squareSide = getSquareSide();
  return squareArea(squareSide);
}