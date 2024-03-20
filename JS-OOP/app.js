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


