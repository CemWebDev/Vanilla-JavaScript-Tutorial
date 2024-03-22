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

/* Javascript Data Types */

//Numbers in Javascript

const width = 30;
const height = 40;

console.log(typeof width); // number
console.log(typeof height); // number

// Strings in Javascript

const favoriteColor = "Yellow";
const carBrand = "Mercedes";

console.log(typeof favoriteColor); // string
console.log(typeof carBrand); // string

// Booleans in Javascript

const isTrue = true;
const isFalse = false;

console.log(typeof isTrue); // boolean
console.log(typeof isFalse); // boolean

// Object in Javascript

const student = { firstName: "John", lastName: "Doe", id: 2024 };

console.log(typeof student); // object

/! Javascript types are dynamic. This means that the same variable can be used to hold different data types./;

let x; // x is undefined now.
x = 12; // Now, x is a number.
console.log(x); // 12
console.log(typeof x); // number
x = "John"; // Now, x is a string
console.log(x); // John
console.log(typeof x); // string
