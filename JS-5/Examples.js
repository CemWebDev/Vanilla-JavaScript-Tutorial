/* Simple Calculator Application */

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
  if (secondNumber != 0) {
    return firstNumber / secondNumber;
  } else {
    console.log("Invalid value");
  }
}

function calculator(operation) {
  let result;
  switch (operation) {
    case "+":
      result = add(1, 2);
      break;
    case "-":
      result = subtract(1, 2);
      break;
    case "*":
      result = multiply(1, 2);
      break;
    case "/":
      result = divide(1, 2);
      break;
    default:
      console.log("Unknown operation");
      break;
  }
  console.log(result);
}

calculator("+");
calculator("-");
calculator("*");
calculator("/");

// Recursive Fibonacci Function

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(7)); // 13
console.log(fibonacci(14)); // 377

// Function to find the minimum and maximum values in an array

function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // Return an object containing the min and max values
  return { min, max };
}

const numbers = [3, 7, 2, 9, 1, 6, 4, 8, 5];

console.log(findMinMax(numbers)); // {min: 1, max: 9} so, output is an object

console.log(findMinMax(numbers).min); // 1
console.log(findMinMax(numbers).max); // 9
