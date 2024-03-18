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


/* getElementsByClassName() */

// Get elements with class name "item"
const listCollection = document.getElementsByClassName("item");

/* Let's check the type of listCollection variable */
console.log(typeof listCollection) // object - HTMLCollection

// Add underline style to each element in the array
const listCollectionArr = Array.from(listCollection);
listCollectionArr.forEach((item) => {
  item.style.textDecoration = "underline";
})