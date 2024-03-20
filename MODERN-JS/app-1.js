// Arrow functions

const sayHello = () => {
  console.log("Hello!");
};

sayHello(); // Hello!

const welcome = (firstName) => {
  console.log(`Welcome ${firstName}`);
};
welcome("John"); // Welcome John

// Calculator with arrow functions

const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) =>
  secondNumber !== 0 ? firstNumber / secondNumber : "Cannot divide by zero";

const calculator = (operation) => {
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
};

calculator("+"); // 4
calculator("-"); // -2
calculator("*"); // 3
calculator("/"); //
