/* Javascript Arrays */

//! Creating an array
const brands = ["Mercedes", "Volvo", "Lamborghini"];
const countries = ["Brazil", "Canada", "Germany", "Italy"];
const fruits = ["Banana", "Orange", "Apple"];

// Printing elements of the 'brands' array
console.log(brands[0]); // Mercedes
console.log(brands[1]); // Volvo
console.log(brands[2]); // Lamborghini

// Another way to create an array. (We do not have to stop on the index 2.)
const cities = [];
cities[0] = "Istanbul";
cities[1] = "London";
cities[2] = "Los Angeles";

// Printing elements of the 'cities' array
console.log(cities[0]); // Istanbul
console.log(cities[1]); // London
console.log(cities[2]); // Los Angeles
console.log(cities[3]); // undefined

// Converting an array to a string
let convertedArray = countries.toString();
console.log(convertedArray); // Brazil, Canada, Germany, Italy

// Getting the length of an array
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
console.log(brands.toString()); // Mercedes, Volvo, Lamborghini, BMW

// Reverse the array
console.log(fruits.reverse()); // ['Orange', 'Banana']

//! -shift()-
/* The shift() method removes the first element from an array */
console.log(countries.toString()); // Brazil, Canada, Germany, Italy
countries.shift();
console.log(countries.toString()); // Canada, Germany, Italy

//! -unshift()-
/* The unshift() method adds a new item to the array (at the beginning) */
fruits.unshift("Mango");
console.log(fruits.toString()); // Mango, Banana, Orange

//! -splice()-
/* The splice() method adds/removes items to/from an array */
console.log(cities.toString()); // Istanbul, London, Los Angeles
cities.splice(1, 0, "Paris"); // Inserting "Paris" at index 1
console.log(cities.toString()); // Istanbul, Paris, London, Los Angeles
cities.splice(2, 1); // Removing 1 element starting from index 2
console.log(cities.toString()); // Istanbul, Paris, Los Angeles
