/* Javascript DOM */

// Select HTML item
const demoTag = document.querySelector(".demo");
const myButton = document.querySelector("#btn");
const alertBtn = document.querySelector(".alert-btn");
// Adding event listeners

myButton.addEventListener("click", () => {
  console.log("clicked");
  demoTag.textContent = "Clicked";
});

alertBtn.addEventListener("click", () => {
  alert("Clicked");
});
