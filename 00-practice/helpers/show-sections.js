import { squareSection } from './square-elements.js';
import { triangleSection } from './triangle-elements.js';
import { circleSection } from './circle-elements.js';

function showSquareSection() {
  squareSection.style.display = "flex";
  triangleSection.style.display = "none";
  circleSection.style.display = "none";
}

function showTriangleSection() {
  triangleSection.style.display = "flex";
  squareSection.style.display = "none";
  circleSection.style.display = "none";
}

function showCircleSection() {
  circleSection.style.display = "flex";
  triangleSection.style.display = "none";
  squareSection.style.display = "none";
}

export {
  showSquareSection,
  showTriangleSection,
  showCircleSection
};