// # Geometric figures functions #
// Square code
const squarePerimeter = side => {
  return side * 4;
};

const squareArea = side => {
  return side ** 2;
};

// Triangle code
const triangleExists = (side1, side2, base) => {
  return (
    side1 + side2 > base &&
    side1 + base > side2 &&
    side2 + base > side1
  );
};


const trianglePerimeter = (side1, side2, base) => {
  return side1 + side2 + base;
};

const triangleArea = (base, height) => {
  return (base * height) / 2; 
};

// Equilateral
const equilateralTriangleHeight = side => {
  const squaredSide = side ** 2;
  const squaredNewBase = (side / 2) ** 2;

  return Math.sqrt(squaredSide - squaredNewBase);
};

const equilateralTriangleArea = side => {
  const height = equilateralTriangleHeight(side);

  return triangleArea(side, height);
};

// Isosceles
const isoscelesTriangleHeight = (side, base) => {
  const newSquaredBase = (base / 2) ** 2;
  const squaredSide = side ** 2;

  return Math.sqrt(squaredSide - newSquaredBase);
};

const isoscelesTriangleArea = (side, base) => {
  const height = isoscelesTriangleHeight(side, base);

  return triangleArea(base, height);
};

// Scalene
const scaleneTriangleArea = (sideA, sideB, base) => {
  // heron's formula
  const semiPerimeter = (sideA + sideB + base) / 2;
  const firstTerm = semiPerimeter - sideA;
  const secondTerm = semiPerimeter - sideB;
  const thirdTerm = semiPerimeter - base;

  return Math.sqrt(semiPerimeter * firstTerm * secondTerm * thirdTerm);
};

const scaleneTriangleHeight = (sideA, sideB, base) => {
  const area = scaleneTriangleArea(sideA, sideB, base);

  return (area * 2) / base;
};

// Circle code
const circleDiameter = radius => {
  return radius * 2;
};

const PI = Math.PI;

const circlePerimeter = radius => {
  const diameter = circleDiameter(radius);
  return diameter * PI;
};

const circleArea = radius => {
  return (radius ** 2) * PI;
};

function result(value, unit, isSquare) {
  if (isSquare) {
    return `${value}${unit}²`;
  } else {
    return `${value}${unit}`;
  }
}

const triangleTypeBySide = (sideA, sideB, base) => {
  // Equilateral
  if (sideA == sideB && sideA == base) {
    return 1;

  // Isosceles
  } else if (sideA == sideB && sideA != base) {
    return 2;
  } else if (sideB == base && sideB != sideA) {
    return 3;
  } else if (base == sideA && base != sideB) {
    return 4;

  // Scalene
  } else {
    return 5;
  }
}

const triangleHeightByType = (type, sideA, sideB, base) => {
  switch (type) {
    case 1:
      return equilateralTriangleHeight(sideA);
      break;
    case 2:
      return isoscelesTriangleHeight(sideA, base);
      break;
    case 3:
      return isoscelesTriangleHeight(sideB, sideB);
      break;
    case 4:
      return isoscelesTriangleHeight(base, sideA);
      break;
    case 5:
      return scaleneTriangleHeight(sideA, sideB, base);
      break;
  }
};

const triangleAreaByType = (type, sideA, sideB, base) => {
  switch (type) {
    case 1:
      return equilateralTriangleArea(sideA);
      break;
    case 2:
      return isoscelesTriangleArea(sideA, base);
      break;
    case 3:
      return isoscelesTriangleArea(sideB, sideB);
      break;
    case 4:
      return isoscelesTriangleArea(base, sideA);
      break;
    case 5:
      return scaleneTriangleArea(sideA, sideB, base);
      break;
  }
};

export {
  squarePerimeter,
  squareArea,
  triangleExists,
  trianglePerimeter,
  triangleArea,
  equilateralTriangleHeight,
  equilateralTriangleArea,
  isoscelesTriangleHeight,
  isoscelesTriangleArea,
  scaleneTriangleArea,
  scaleneTriangleHeight,
  circleDiameter,
  circlePerimeter,
  circleArea,
  result,
  triangleTypeBySide,
  triangleHeightByType,
  triangleAreaByType
};