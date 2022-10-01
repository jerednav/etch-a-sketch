let size = 16;
let color = "#333333";
let click = true;

let pixelContainer = document.querySelector(".pixel-container");

//set the pixel container
function setPixelContainer(size) {
  pixelContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  pixelContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  //Create loop to create the size of the div
  for (let i = 0; i < size * size; i++) {
    const pixelDiv = document.createElement("div");
    pixelDiv.classList.add("pixel");
    pixelContainer.appendChild(pixelDiv);

    pixelDiv.addEventListener("mouseover", colorPixel);
  }
}

function colorPixel() {
  this.style.backgroundColor = color;
}

function changeSize(amount) {
  if (input >= 2 && input > 100) {
    document.querySelector(".error").style.display = "flex";
  } else {
    document.querySelector(".none").style.display = "none";
  }
}

window.onload = () => {
  setPixelContainer(size);
};
