let default_size = 16;
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

//color the pixel/square
function colorPixel() {
  this.style.backgroundColor = color;
}

let button = document.querySelector(".buttonAlert");
button.addEventListener("click", () => {
  let size = prompt("What size would you like?");
  changeSize(size);
});

//changes size of grid, no less than 2 and no greater than 100
function changeSize(size) {
  if (size >= 2 && size > 100) {
    alert("Pick something between 2 and 100");
  } else {
    setPixelContainer(size);
  }
}

window.onload = () => {
  setPixelContainer(default_size);
};
