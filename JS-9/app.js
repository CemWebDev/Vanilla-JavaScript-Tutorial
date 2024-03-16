/* Javascript objects */

// Creating an object
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
};

// Accessing object properties

console.log(student.firstName); // John
console.log(student.lastName); // Doe
console.log(student.age); // 21

// A function can be stored in an object as a property

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 455634,
  fullName: () => {
    console.log("Full name: " + person.firstName + " " + person.lastName);
  },
};
person.fullName(); //Full name: John Doe

// Adding properties to an object
person.email = "john.doe@example.com";
console.log(person.email); // john.doe@example.com

// Deleting properties from an object
delete person.id;
console.log(person.id); // undefined

// Checking if a property exist in an object

console.log("age" in person); // false
console.log("firstName" in person); // true

//! Object constructor
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const myCar = new Car("Mercedes", "AMG", 2019);
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.year);
