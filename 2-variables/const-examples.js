/* Javascript variables */

// Const keyword
const firstName = "John";
const lastName = "Doe";
console.log("First Name: " + firstName); // First Name: John
console.log("Last Name: " + lastName); // Last Name: Doe

const fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName); // Full Name: John Doe

// A variable defined with the "const" keyword cannot be reassigned.

const firstNumber = 45;
console.log(firstNumber); // 45
firstNumber = 34;
console.log(firstNumber); // error

/* JavaScript const variables must be assigned a value when they are declared */

//! Error:
/* const name;
name = "John"; */
//! Error
