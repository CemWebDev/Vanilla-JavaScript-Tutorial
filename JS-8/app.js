/* Javascript Loops */

//! For loop

let total = 0;
/* for loop to print numbers from 1 to 10 */
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
/* for loop to calculate the sum of numbers from 0 to 10 */

for (let i = 0; i <= 10; i++) {
  total += i;
}
console.log("The sum of numbers from 1 to 10 is " + total);

/* for loop to print even numbers between 0 and 10 */
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
/* for loop to print odd numbers between 0 and 10 */
for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// We can also use for loop with functions

function factorial(userInputNumber) {
  let result = 1;
  for (let i = 1; i <= userInputNumber; i++) {
    result *= i;
  }
  console.log(userInputNumber + "! = " + result);
}
// Call the factorial function with a positive integer as an argument
factorial(5); // 120
factorial(4); // 24

// Define an array
const cities = ["Istanbul", "New York", "London", "Paris"];
for (let i = 0; i < cities.length; i++) {
  // Print each city to the console
  console.log(cities[i]);
}

//! foreach

cities.forEach((city) => {
  console.log(city);
});


