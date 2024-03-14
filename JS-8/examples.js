/* For loop examples */

/* 
 Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

const numbers = [12, 2, 45, 1, 123, 342, -3, 67, 96];

/* Write a javascript for loop that finds the largest number in an array. */
let maxNumber = numbers[0];
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}
console.log(maxNumber); // 342

/* Write a javascript for loop that finds the smallest number in an array */
let minNumber = numbers[2];
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}
console.log(minNumber);

