class Car {
  Start() {
    console.log("Start");
  }
  Stop() {
    console.log("Stop");
  }

  setBrand(brand, model, mileage) {
    this.brandName = brand;
    this.modelnum = model;
    this.mileageOf = mileage;
  }
}

let fortuner = new Car();
fortuner.setBrand("Toyota", 1234, 22.4);
let lexus = new Car();
lexus.setBrand("Lexus");
