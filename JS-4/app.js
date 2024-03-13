let isTrue = true;

/* These two if statements below are same because true is a boolean type. */
if (isTrue == true) {
  //! This block, will be executed if condition is true.
  console.log("Condition is true.");
} else {
  //! This block, will be executed if condition is false.
  console.log("Condition is false.");
}

if (isTrue) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

let testNumber = 2;

if (testNumber > 0) {
  console.log(testNumber + " is positive.");
} else if (testNumber == 0) {
  console.log("The number is zero (0).");
} else {
  console.log(testNumber + " is negative.");
}

let username = "john__doe";
let password = "john_doe12345";

if (username == "john__doe" && password == "john_doe12345") {
  console.log("Welcome, John");
} else {
  console.log("Username or password is wrong");
}

//! Nested Conditions

let theNumber = 21;
if (theNumber > 18) {
  console.log("Number is more than 18");
  if (theNumber > 20) {
    console.log("Number is also more than 20");
  } else {
    console.log("The number is more than 18 and less than 20");
  }
} else {
  console.log("The number is less than 18.");
}
