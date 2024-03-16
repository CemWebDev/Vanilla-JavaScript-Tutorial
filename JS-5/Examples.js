// Simple Calculator Application
const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

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

