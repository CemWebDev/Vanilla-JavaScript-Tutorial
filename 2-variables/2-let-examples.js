/* Declaring variables using 'let' keyword */

// Let keyword
let firstName = "John";
let lastName = "Doe";

console.log("First Name: " + firstName); // First Name: John
console.log("Last Name: " + lastName); // Last Name: Doe

let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName); // Full Name: John Doe

let age = 29;

console.log(fullName + " is " + age + " years old."); // John Doe is 29 years old.

// A variable defined with the "let" keyword can be reassigned.

let myAge = 24;
console.log(myAge); // 24
myAge = 37;
console.log(myAge); // 37

// If you are using "let" keyword, you can declare first then, you can assign a value.

let isTrue;
isTrue = true;
console.log(isTrue); // true
