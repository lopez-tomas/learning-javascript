const circleRadius = document.getElementById('circleRadius');

const circleDiameterButton = document.getElementById('circleDiameter');
const circlePerimeterButton = document.getElementById('circlePerimeter');
const circleAreaButton = document.getElementById('circleArea');

let circleResult = document.getElementById('circleResult');

function getRadius() {
  circleResult.style.fontSize = "1rem";
  circleResult.style.color = "white";

  return parseFloat(document.getElementById('circleRadius').value);
}

function getCircleUnit() {
  return document.getElementById('circleUnit').value;
}

export {
    getRadius,
    getCircleUnit,
    circleRadius,
    circleDiameterButton,
    circlePerimeterButton,
    circleAreaButton,
    circleResult
};