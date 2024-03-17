/* Accessing HTML elements */
const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");

// Adding event listener
changeColorBtn.addEventListener("click", () => {
  changeTheColor();
});

function changeTheColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ")";
  body.style.backgroundColor = backgroundColor;
}
