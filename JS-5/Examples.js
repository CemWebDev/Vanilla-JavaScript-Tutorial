// Simple Calculator Application
const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    console.log("Invalid value");
  } else {
    return firstNumber / secondNumber;
  }
};

const calculate = (operation) => {
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
      console.log("Invalid operation");
      break;
  }
  console.log(result);
};

calculate("+");
calculate("-");
calculate("*");
calculate("/");



// Recursive Fibonacci Function 

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(3)); // 2
console.log(fibonacci(7)); // 13
console.log(fibonacci(14)); // 377
