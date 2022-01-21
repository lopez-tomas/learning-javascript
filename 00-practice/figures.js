// # Imports and setting properties for each geometric figures #
/*
  Figures base functions
*/
import {
  squarePerimeter,
  squareArea,
  triangleExists,
  trianglePerimeter,
  circleDiameter,
  circlePerimeter,
  circleArea,
  result,
  triangleTypeBySide,
  triangleHeightByType,
  triangleAreaByType
} from './helpers/base-functions.js';

/*
  Inputs handlers
*/
import {
  handleInputSquareSide,
  handleInputTriangleSideA,
  handleInputTriangleSideB,
  handleInputTriangleBase,
  handleInputCircleRadius
} from './helpers/inputs-handler.js';

/*
  Importing square elements & setting properties
*/
import {
  getSquareSide,
  getSquareUnit,
  squareButton,
  squareSide,
  squarePerimeterButton,
  squareAreaButton,
  squareResult
} from './helpers/square-elements.js';

squareSide.oninput = handleInputSquareSide;

squarePerimeterButton.addEventListener("click", calculateSquarePerimeter);
squareAreaButton.addEventListener("click", calculateSquareArea);

/*
  Importing triangle elements & setting properties
*/
import {
  getSides,
  getTriangleUnit,
  triangleButton,
  triangleSideA,
  triangleSideB,
  triangleBase,
  triangleHeightButton,
  trianglePerimeterButton,
  triangleAreaButton,
  triangleResult,
  //triangleResult2,
  //triangleResult3,
  errorTriangleMessage
} from './helpers/triangle-elements.js';

triangleSideA.oninput = handleInputTriangleSideA;
triangleSideB.oninput = handleInputTriangleSideB;
triangleBase.oninput = handleInputTriangleBase;

triangleHeightButton.addEventListener("click", calculateTriangleHeight);
trianglePerimeterButton.addEventListener("click", calculateTrianglePerimeter);
triangleAreaButton.addEventListener("click", calculateTriangleArea);

/*
  Importing circle elements & setting properties
*/
import {
  getRadius,
  getCircleUnit,
  circleButton,
  circleRadius,
  circleDiameterButton,
  circlePerimeterButton,
  circleAreaButton,
  circleResult
} from './helpers/circle-elements.js';

circleRadius.oninput = handleInputCircleRadius;

circleDiameterButton.addEventListener('click', calculateCircleDiameter);
circlePerimeterButton.addEventListener('click', calculateCirclePerimeter);
circleAreaButton.addEventListener('click', calculateCircleArea);

/*
  Getting geometric figures sections & header buttons to change display of each sections
*/
import { showSquareSection, showTriangleSection, showCircleSection } from './helpers/show-sections.js';

squareButton.onclick = showSquareSection;
triangleButton.onclick = showTriangleSection;
circleButton.onclick = showCircleSection;


// # Connecting HTML with JavaScript #
/*
  Interaction with Square section
*/
function calculateSquarePerimeter() {
  const squareSide = getSquareSide();
  const unit = getSquareUnit();

  const perimeter = squarePerimeter(squareSide);
  squareResult.innerText = result(perimeter, unit, false);
}

function calculateSquareArea() {
  const squareSide = getSquareSide();
  const unit = getSquareUnit();

  const area = squareArea(squareSide);
  squareResult.innerText = result(area, unit, true);
}

/*
  Interaction with Triangle section
*/
function calculateTriangleHeight() {
  let height;
  const sides = getSides();
  const sideA = sides["sideA"];
  const sideB = sides["sideB"];
  const base = sides["base"];
  const unit = getTriangleUnit();
  const type = triangleTypeBySide(sideA, sideB, base);

  if (!triangleExists(sideA, sideB, base)) {
    errorTriangleMessage();
    return;
  }

  height = triangleHeightByType(type, sideA, sideB, base);

  triangleResult.innerText = result(height, unit, false);
}

function calculateTrianglePerimeter() {
  const sides = getSides();
  const sideA = sides["sideA"];
  const sideB = sides["sideB"];
  const base = sides["base"];
  const unit = getTriangleUnit();

  if (!triangleExists(sideA, sideB, base)) {
    errorTriangleMessage();
    return;
  }

  const perimeter = trianglePerimeter(sideA, sideB, base);
  triangleResult.innerText = result(perimeter, unit, false);
}

function calculateTriangleArea() {
  let area;
  const sides = getSides();
  const sideA = sides["sideA"];
  const sideB = sides["sideB"];
  const base = sides["base"];
  const unit = getTriangleUnit();
  const type = triangleTypeBySide(sideA, sideB, base);

  if (!triangleExists(sideA, sideB, base)) {
    errorTriangleMessage();
    return;
  }

  area = triangleAreaByType(type, sideA, sideB, base);

  triangleResult.innerText = result(area, unit, true);
}

/*
  Interaction with Circle section
*/
function calculateCircleDiameter() {
  const radius = getRadius();
  const unit = getCircleUnit();

  const diameter = circleDiameter(radius);
  circleResult.innerText = result(diameter, unit, false);

  return 0;
}

function calculateCirclePerimeter() {
  const diameter = circleDiameter(getRadius());
  const unit = getCircleUnit();

  const perimeter = circlePerimeter(diameter);
  circleResult.innerText = result(perimeter, unit, false);
}

function calculateCircleArea() {
  const radius = getRadius();
  const unit = getCircleUnit();

  const area = circleArea(radius);
  circleResult.innerText = result(area, unit, true);
}