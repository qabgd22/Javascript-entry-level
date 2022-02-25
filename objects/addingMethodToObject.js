let car = {
    brand: "Peugeot",
    model : "308 GT 2.0 BlueHDi 180",
    year: 2017,
    body_type: "hatchback",
};
car.description = function() {
    return this.brand + " " + this.model + " " + this.year + " " + this.body_type;
};
  
console.log(car.description());

car.engine_capacity = "1997 cc";

console.log("\nCar" + " " + car.brand + " " + car.model + " has engine capacity of " + car.engine_capacity)

