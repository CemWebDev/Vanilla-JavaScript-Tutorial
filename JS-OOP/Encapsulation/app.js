class Car {
  #color;
  constructor(color) {
    this.#color = color;
  }
  getColor() {
    return this.#color;
  }
  setColor(color) {
    this.#color = color;
  }
}

let car = new Car("Blue");
console.log(car.getColor()); // Blue
car.setColor("Red");
console.log(car.getColor()); // Red

// Examples

class Product {
  #name;
  #price;
  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }
  getName() {
    return this.#name;
  }
  getPrice() {
    return this.#price;
  }
  setPrice(price) {
    this.#price = price;
  }
}

const product = new Product("Laptop", 2000);
console.log("20.03.2024 " + product.getPrice());
console.log("20.04.2024 " + product.getName());
