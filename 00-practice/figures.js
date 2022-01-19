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
}

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
  let height = Math.sqrt(squaredSide - squaredNewBase);
  console.log(height);

  return height;
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

// # Geometric figures <-> HTML #
// Square <-> HTML
function getSquareSide() {
  return parseFloat(document.getElementById('squareSide').value);
}

function calculateSquarePerimeter() {
  const squareSide = getSquareSide();

  if (squareSide <= 0) {
    alert("Side MUST be greather than 0");
    return;
  }

  alert(squarePerimeter(squareSide));
  return squarePerimeter(squareSide);
}

function calculateSquareArea() {
  const squareSide = getSquareSide();

  if (squareSide <= 0) {
    alert("Side MUST be greather than zero.");
    return;
  }

  alert(squareArea(squareSide));
  return squareArea(squareSide);
}

// Triangle <-> HTML
function getSides() {
  let sides = {};
  const sideA = parseFloat(document.getElementById('triangleSideA').value);
  const sideB = parseFloat(document.getElementById('triangleSideB').value);
  const base = parseFloat(document.getElementById('triangleBase').value);

  sides["sideA"] = sideA;
  sides["sideB"] = sideB
  sides["base"] = base;

  return sides;
}

function calculateTriangleHeight() {
  let height;
  const sides = getSides();
  const sideA = sides["sideA"];
  const sideB = sides["sideB"];
  const base = sides["base"];

  if (sideA <= 0 || sideB <= 0 || base <= 0) {
    alert("ALL sides MUST be greater than zero.");
    return;
  }

  if (!triangleExists(sideA, sideB, base)) {
    alert("That triangle doesn't exist.");
    return;
  }

  // Equilateral
  if (sideA == sideB && sideA == base) {
    height = equilateralTriangleHeight(sideA);
  // Isosceles
  } else if (sideA == sideB && sideA != base) {
    height = isoscelesTriangleHeight(sideA, base);

  } else if (sideB == base && sideB != sideA) {
    height = isoscelesTriangleHeight(sideB, sideA);

  } else if (base == sideA && base != sideB) {
    height = isoscelesTriangleHeight(base, sideB);

  // Scalene
  } else {
    height = scaleneTriangleHeight(sideA, sideB, base);
  }

  alert(height);
  return height;
}

function calculateTrianglePerimeter() {
  const sides = getSides();
  const sideA = sides["sideA"];
  const sideB = sides["sideB"];
  const base = sides["base"];

  if (sideA <= 0 || sideB <= 0 || base <= 0) {
    alert("ALL sides MUST be greater than zero.");
    return;
  }

  if (!triangleExists(sideA, sideB, base)) {
    alert("That triangle doesn't exist.");
    return;
  }

  alert(trianglePerimeter(sideA, sideB, base));
  return trianglePerimeter(sideA, sideB, base);
}

function calculateTriangleArea() {
  let area;
  const sides = getSides();
  const sideA = sides["sideA"];
  const sideB = sides["sideB"];
  const base = sides["base"];

  if (sideA <= 0 || sideB <= 0 || base <= 0) {
    alert("ALL sides MUST be greater than zero.");
    return;
  }

  if (!triangleExists(sideA, sideB, base)) {
    alert("That triangle doesn't exist.");
    return;
  }

  // Equilateral
  if (sideA == sideB && sideA == base) {
    area = equilateralTriangleArea(sideA);
  // Isosceles
  } else if (sideA == sideB && sideA != base) {
    area = isoscelesTriangleArea(sideA, base);

  } else if (sideB == base && sideB != sideA) {
    area = isoscelesTriangleArea(sideB, sideA);

  } else if (base == sideA && base != sideB) {
    area = isoscelesTriangleArea(base, sideB);

  // Scalene
  } else {
    area = scaleneTriangleArea(sideA, sideB, base);
  }

  alert(area);
  return area;
}

// Circle <-> HTML
function getRadius() {
  return parseFloat(document.getElementById('circleRadius').value);
}

function calculateCircleDiameter() {
  const radius = getRadius();

  if (radius <= 0) {
    alert("Radius MUST be greater than zero.");
    return 0;
  }

  alert(circleDiameter(radius));
  return circleDiameter(radius);
}

function calculateCirclePerimeter() {
  const diameter = circleDiameter(getRadius());

  if (diameter <= 0) {
    alert("Radius MUST be greater than zero.");
    return;
  }

  alert(circlePerimeter(diameter));
  return circlePerimeter(diameter);
}

function calculateCircleArea() {
  const radius = getRadius();

  if (radius <= 0) {
    alert("Radius MUST be greater than zero.");
    return;
  }

  alert(circleArea(radius));
  return circleArea(radius);
}