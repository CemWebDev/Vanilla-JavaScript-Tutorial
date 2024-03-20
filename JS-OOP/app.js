/* Objects */

const car = {
  color: "red",
  age: 12,
  introduction: function () {
    console.log("The car is " + car.color);
  }
}
console.log(car.color); // red
console.log(car.age); // 12
car.introduction(); // The car is red



// Constructor method
class Animal {
  constructor(species) {
    this.species = species;
  }
  introduction() {
    console.log(this.species);
  }
}

const cat = new Animal("Cat");
cat.introduction(); // Cat


// Inheritance - extends keyword
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  introduction() {
    console.log("The brand of the car is " + this.brand);
  }
}

class Car extends Vehicle {
  constructor(brand, color) {
    super(brand);
    this.color = color;
  }
  custom() {
    console.log("The car is " + this.color);
  }
}

const Mercedes = new Car("Mercedes", "Black");
Mercedes.custom(); // The car is black
Mercedes.introduction(); // The brand of the car is Mercedes