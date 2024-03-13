/* Javascript Functions */

/* Hello, world! program by using function */
function helloWorld() {
  console.log("Hello, World!");
}

// Calling the helloWorld function
helloWorld();


//This function takes two numbers as parameters and adds them together.
function Add(firstNumber, secondNumber) {
   // The sum of the two numbers is calculated and stored in the variable 'summation'.
  let summation = firstNumber + secondNumber;
   // The sum along with the original numbers is printed to the console for display.
  console.log(firstNumber + " + " + secondNumber + " = " + summation);
}

// Calling the Add function with the arguments 1 and 2.
Add(1, 2); // Output is 2.
// Calling the Add function with the arguments 3 and 4.
Add(3, 4); // Output is 12.


/* When JavaScript reaches a return statement, the function will stop executing. */


// Declaring a function named 'multiply' that takes two parameters and returns their product.
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

// Declaring a variable 'output' to store the result of the multiplication function.
let output = multiply(4, 5);

console.log(output); // 20.

