/* Javascript Arrays */

//! Creating an array
const brands = ["Mercedes", "Volvo", "Lamborghini"];
const countries = ["Brazil", "Canada", "Germany", "Italy"];
const fruits = ["Banana", "Orange", "Apple"];

console.log(brands[0]); // Mercedes
console.log(brands[1]); // Volvo
console.log(brands[2]); // Lamborghini

const cities = [];
cities[0] = "Istanbul";
cities[1] = "London";
cities[2] = "Los Angeles";

console.log(cities[0]); // Istanbul
console.log(cities[1]); // London
console.log(cities[2]); //Los Angeles
console.log(cities[3]); // undefined

// Converting an array to a string
let convertedArray = countries.toString();
console.log(convertedArray); // Brazil, Canada, Germany, Italy

// The length for an array

let lengthOfBrandsArray = brands.length;
console.log(lengthOfBrandsArray); // 3

//! Array Methods

//! -pop()-
/* The pop() method removes the last element from an array */
console.log(fruits.toString()); // Banana, Orange, Apple
fruits.pop();
console.log(fruits.toString()); // Banana, Orange

//! -push()-
/* The push() method adds a new item to the array (at the end) */
brands.push("BMW");
console.log(brands.toString()); // Mercedes, Volvo, Lamborghini

// Reverse the array
console.log(fruits.reverse()); // ['Orange', 'Banana']
