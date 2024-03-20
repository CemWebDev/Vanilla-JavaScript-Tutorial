// Spread operator

// Creating the first array
const numbers1 = [1, 2, 3];

// Creating the second array using the spread operator (...).
// It takes all elements from the first array and then adds new elements.
const numbers2 = [...numbers1, 6, 7, 1, 3];
console.log(numbers2); // [1, 2, 3, 6 , 7, 1, 3]

//creating the first object
const product1 = { name: "TV", price: 200 };
// creating the second object
const product2 = { color: "gray" };

const mergeObjects = { ...product1, ...product2 };
console.log(mergeObjects); // { name: 'TV', price: 200, color: 'gray' }
