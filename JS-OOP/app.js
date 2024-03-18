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




