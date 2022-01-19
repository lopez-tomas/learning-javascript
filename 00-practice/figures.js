// Square code
console.group("Square");

const squareSide = 5;
console.log(`Sides = ${squareSide}cm`);

const squarePerimeter = squareSide * 4;
console.log(`Perimeter = ${squarePerimeter}cm`);

const squareArea = squareSide ** 2;
console.log(`Area = ${squareArea}cm^2`);

console.groupEnd();

// Triangle code
console.group("Triangle");

const triangleSideA = 6;
const triangleSideB = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
console.log(`SideA = ${triangleSideA}cm
SideB = ${triangleSideB}cm
Base = ${triangleBase}cm
Height = ${triangleHeight}cm
`
);

const trianglePerimeter = triangleSideA + triangleSideB + triangleBase;
console.log(`Perimeter = ${trianglePerimeter}cm`);

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log(`Area = ${triangleArea}cm^2`);

console.groupEnd();

// Circle code
console.group("Circle");

const circleRadius = 2;
console.log(`Radius = ${circleRadius}cm`);

const circleDiameter = circleRadius * 2;
console.log(`Diameter = ${circleDiameter}cm`);

const PI = Math.PI;

const circlePerimeter = circleDiameter * PI;
console.log(`Perimeter = ${circlePerimeter}cm`);

const circleArea = (circleRadius ** 2) * PI;
console.log(`Area = ${circleArea}cm^2`);

console.groupEnd();