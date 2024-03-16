/* JS DOM */


/* getElementById Method */
const demoTag = document.getElementById("demo");
const demoButton = document.getElementById("btn");

// Demo tag element's default text content is: Hello
// We can change the content by DOM manipulation
//! Adding event listeners
demoButton.addEventListener("click", () => {
  demoTag.textContent = "JavaScript - DOM Manipulation";
});


