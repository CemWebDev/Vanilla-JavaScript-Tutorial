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
