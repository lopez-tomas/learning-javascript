import { squareSection } from './square-elements.js';
import { triangleSection } from './triangle-elements.js';
import { circleSection } from './circle-elements.js';
import { roiSection, simpleSection, compoundSection } from './salaries-elements.js';

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

function showROISection() {
  roiSection.style.display = "flex";
  simpleSection.style.display = "none"
  compoundSection.style.display = "none"
}

function showSimpleSection() {
  simpleSection.style.display = "flex"
  roiSection.style.display = "none";
  compoundSection.style.display = "none"
}

function showCompoundSection() {
  compoundSection.style.display = "flex"
  roiSection.style.display = "none";
  simpleSection.style.display = "none"
}

export {
  showSquareSection,
  showTriangleSection,
  showCircleSection,
  showROISection,
  showSimpleSection,
  showCompoundSection,
};