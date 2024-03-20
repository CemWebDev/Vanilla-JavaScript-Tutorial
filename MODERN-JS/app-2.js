// Array methods

//map()

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((x) => x * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const words = ["apple", "car", "Istanbul"];
const lengths = words.map((x) => x.length);
console.log(lengths); // [5, 3, 8]

// Objects in array

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 },
];
const names = students.map((student) => student.name);
console.log(names); // ["Alice", "Bob", "Charlie"]


