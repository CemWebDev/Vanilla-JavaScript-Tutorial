// filter()

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4];

const words = ["apple", "car", "Istanbul", "New York", "Los Angeles"];
const longWords = words.filter((x) => x.length > 6);
console.log(longWords); // [ 'Istanbul', 'New York', 'Los Angeles' ]

const products = [
  { name: "laptop", price: 1000 },
  { name: "keyboard", price: 3000 },
  { name: "mouse", price: 2000 },
  { name: "TV", price: 5000 },
];
const affordableProducts = products.filter((x) => x.price < 4000);
console.log("Affordable Products: ", affordableProducts);
/* Affordable Products:  [
  { name: 'laptop', price: 1000 },
  { name: 'keyboard', price: 3000 },
  { name: 'mouse', price: 2000 }
] */
