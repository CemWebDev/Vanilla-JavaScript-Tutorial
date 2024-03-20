/* JS DOM */

/* querySelector and querySelectorAll */

// Select the element with id 'demo' using querySelector
const demoTag = document.querySelector("#demo");
// Set the text color of the demo tag to red
demoTag.style.color = "red";

// Select the element with class name btn
const myButton = document.querySelector(".btn");
// Adding event listeners
myButton.addEventListener("click", () => {
  console.log("clicked");
});

// Select all elements with class name 'same-text'
const divTags = document.querySelectorAll(".same-text");
console.log(typeof divTags); // object - (node list)
console.log(divTags); // It is like an array(Node list)

const divTagsArr = Array.from(divTags);
console.log(divTagsArr); // Now, it is an array
divTagsArr.forEach((tag) => {
  tag.style.color = "green";
});
