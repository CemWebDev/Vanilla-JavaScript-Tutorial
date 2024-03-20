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
  // Method the get name of the product
  getName() {
    return this.#name;
  }
  // Method the get price of the product
  getPrice() {
    return this.#price;
  }
  // Method the set price of the product
  setPrice(price) {
    this.#price = price;
  }
}

const product = new Product("Laptop", 2000);
// Log the price of the product with the date "20.03.2024"
console.log("20.03.2024 " + product.getPrice());
// Log the price of the product with the date "20.04.2024"
console.log("20.04.2024 " + product.getName());
