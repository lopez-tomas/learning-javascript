import { squarePerimeterButton, squareAreaButton, squareResult } from './square-elements.js';
import { triangleHeightButton, trianglePerimeterButton, triangleAreaButton, triangleResult, triangleResult2, triangleResult3 } from './triangle-elements.js';
import { circleDiameterButton, circlePerimeterButton, circleAreaButton, circleResult } from './circle-elements.js';

// Squares
function handleInputSquareSide(e) {
  if (e.target.value <= 0) {
    squareResult.innerText = "The side MUST be greater than zero.";

    squareResult.style.color = "red";
    squareResult.style.fontSize = "0.875rem";

    squarePerimeterButton.disabled = true;
    squarePerimeterButton.classList.add("disabled");
    squarePerimeterButton.classList.remove("hover");

    squareAreaButton.disabled = true;
    squareAreaButton.classList.add("disabled");
    squareAreaButton.classList.remove("hover");
  } else {
    squareResult.innerText = "";
    
    squarePerimeterButton.disabled = false;
    squarePerimeterButton.classList.add("hover");
    squarePerimeterButton.classList.remove("disabled");

    squareAreaButton.disabled = false;
    squareAreaButton.classList.add("hover");
    squareAreaButton.classList.remove("disabled");
  }
}

// Triangles
function handleInputTriangleSideA(e) {
  if (e.target.value <= 0) {
    triangleResult.innerText = "SideA MUST be greater than zero.";

    triangleResult.style.color = "red";
    triangleResult.style.fontSize = "0.875rem";

    triangleHeightButton.disabled = true;
    triangleHeightButton.classList.add("disabled");
    triangleHeightButton.classList.remove("hover");
    
    trianglePerimeterButton.disabled = true;
    trianglePerimeterButton.classList.add("disabled");
    trianglePerimeterButton.classList.remove("hover");

    triangleAreaButton.disabled = true;
    triangleAreaButton.classList.add("disabled");
    triangleAreaButton.classList.remove("hover");
  } else {
    triangleResult.innerText = "";

    triangleHeightButton.disabled = false;
    triangleHeightButton.classList.add("hover");
    triangleHeightButton.classList.remove("disabled");

    trianglePerimeterButton.disabled = false;
    trianglePerimeterButton.classList.add("hover");
    trianglePerimeterButton.classList.remove("disabled");

    triangleAreaButton.disabled = false;
    triangleAreaButton.classList.add("hover");
    triangleAreaButton.classList.remove("disabled");
  }
}

function handleInputTriangleSideB(e) {
  if (e.target.value <= 0) {
    triangleResult2.innerText = "SideB MUST be greater than zero.";

    triangleResult2.style.display = "block";
    triangleHeightButton.disabled = true;
    trianglePerimeterButton.disabled = true;
    triangleAreaButton.disabled = true;
  } else {
    triangleResult2.innerText = "";

    triangleResult2.style.display = "none";
    triangleHeightButton.disabled = false;
    trianglePerimeterButton.disabled = false;
    triangleAreaButton.disabled = false;
  }
}

function handleInputTriangleBase(e) {
  if (e.target.value <= 0) {
    triangleResult3.innerText = "Base MUST be greater than zero.";

    triangleResult3.style.display = "block";
    triangleHeightButton.disabled = true;
    trianglePerimeterButton.disabled = true;
    triangleAreaButton.disabled = true;
  } else {
    triangleResult3.innerText = "";

    triangleResult3.style.display = "none";
    triangleHeightButton.disabled = false;
    trianglePerimeterButton.disabled = false;
    triangleAreaButton.disabled = false;
  }
}

// Circles
function handleInputCircleRadius(e) {
  if (e.target.value <= 0) {
    circleResult.innerText = "The radius MUST be greater than zero.";

    circleResult.style.color = "red";
    circleResult.style.fontSize = "0.875rem";

    circleDiameterButton.disabled = true;
    circleDiameterButton.classList.add("disabled");
    circleDiameterButton.classList.remove("hover");

    circlePerimeterButton.disabled = true;
    circlePerimeterButton.classList.add("disabled");
    circlePerimeterButton.classList.remove("hover");

    circleAreaButton.disabled = true;
    circleAreaButton.classList.add("disabled");
    circleAreaButton.classList.remove("hover");
  } else {
    circleResult.innerText = "";

    circleDiameterButton.disabled = false;
    circleDiameterButton.classList.add("hover");
    circleDiameterButton.classList.remove("disabled");
    
    circlePerimeterButton.disabled = false;
    circlePerimeterButton.classList.add("hover");
    circlePerimeterButton.classList.remove("disabled");

    circleAreaButton.disabled = false;
    circleAreaButton.classList.add("hover");
    circleAreaButton.classList.remove("disabled");
  }
}

export {
  handleInputSquareSide,
  handleInputTriangleSideA,
  handleInputTriangleSideB,
  handleInputTriangleBase,
  handleInputCircleRadius
}