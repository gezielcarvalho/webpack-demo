// src/index.js
import "./style.css";
import sampleImage from "./image.png";

function createComponent() {
  const element = document.createElement("div");
  element.innerHTML = "Hello, Webpack!";
  element.classList.add("hello");

  const img = document.createElement("img");
  img.src = sampleImage;
  img.alt = "Sample Image";
  element.appendChild(img);

  return element;
}

document.body.appendChild(createComponent());
