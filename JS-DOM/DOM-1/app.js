/* JS DOM */


/* getElementById() */
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

/*  getElementsByTagName() */

const divTags = document.getElementsByTagName("div");
console.log(divTags); // object - HTMLCollection

const divTagsArr = Array.from(divTags);
console.log(divTags.length); // 4