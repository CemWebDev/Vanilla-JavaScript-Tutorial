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