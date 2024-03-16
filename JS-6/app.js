/* Javascript Strings */

// String with double quote
let student1 = "Raeburn Parkinson";
console.log(student1); // Raeburn Parkinson

// String with single quote
let student2 = "Forest Eads";
console.log(student2); // Forest Eads

// Template Strings

let newText = `javascript is awesome.`;
console.log(newText); // Javascript is awesome.

let age = 23;

let info = `He is ${age} years old`;
console.log(info); // He is 23 years old.

//! Javascript String methods

//! -Length-
// To find the length of a string, use the length property
let text = "JohnDoe";
let lengthOfTheText = text.length;
console.log(lengthOfTheText); // 7

//! -charAt()-

let greeting = "hello, world!";
console.log(greeting.charAt(2)); // l
console.log(greeting.charAt(8)); // o
console.log(greeting.charAt(5)); // ,

//! toLowerCase() and toUpperCase()

let text1 = "hello, world!";
let upperCaseText = text1.toUpperCase();
console.log(upperCaseText); // hello, world!
console.log(text1.toUpperCase()); // HELLO, WORLD!

let text2 = "HELLO, WORLD";
let lowerCaseText = text2.toLowerCase();
console.log(lowerCaseText); // HELLO, WORLD!
console.log(text2.toLowerCase()); // hello, world!

//! -replace()-

let text3 = "John Doe is 23 years old";
console.log(text3); // John Doe is 23 years old
let newText3 = text3.replace("23", "24");
console.log(newText3); // John Doe is 24 years old

//! -trim()-
let text4 = "      hello, world!           ";
//! The trim() method removes whitespace from both ends of a string
console.log(text4.trim()); // hello, world!

//! startsWith() and endsWith()

let text5 = "Hello world!";
console.log(text5.startsWith("Hello")); // true;
console.log(text5.startsWith("World!")); // false

console.log(text5.endsWith("world!")); // true;
console.log(text5.endsWith("Hello!")); // false

//! -concat()-

/* To concatenate two or more strings, you can use the concat() method. */

let text6 = "Hello";
let text7 = "world!";
let text8 = text6.concat(" ", text7);
console.log(text8); // Hello world!
