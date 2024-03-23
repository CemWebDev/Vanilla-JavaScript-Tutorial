let isTrue = true;

/* These two if statements below are same because true is a boolean type. */
if (isTrue == true) {
  //! This block, will be executed if condition is true.
  console.log("Condition is true.");
} else {
  //! This block, will be executed if condition is false.
  console.log("Condition is false.");
}
let myNumber = 12;

// Checking if the number is greater than 10
if (myNumber > 10) {
  console.log(myNumber + " is greater than 10.");
}
// If the number is exactly 10
else if (myNumber === 10) {
  console.log(myNumber + " is  10.");
}
// If the number is smaller than 10
else {
  console.log(myNumber + " is smaller than 10.");
}

let isReservable = true;
let numberOfPeople = 4;

// Checking if reservations are available
if (isReservable) {
  // Checking reservation status based on the number of people
  if (numberOfPeople <= 0) {
    console.log("Please enter a valid number of people.");
  } else if (numberOfPeople <= 2) {
    console.log("Your reservation is confirmed. Your table for two is ready!");
  } else if (numberOfPeople <= 4) {
    console.log("Your reservation is confirmed. Your table for four is ready!");
  } else if (numberOfPeople <= 6) {
    console.log("Your reservation is confirmed. Your table for six is ready!");
  } else {
    console.log(
      "Sorry, you can only make a reservation for up to six people at a time."
    );
  }
} else {
  console.log("Sorry, reservations are not available at the moment.");
}


//! Nested statements example

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
