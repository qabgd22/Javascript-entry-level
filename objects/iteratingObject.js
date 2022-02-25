//The for/in statement loops through the properties of car object.

let txt = "";
let car = {brand: "Peugeot", model : "308 GT 2.0 BlueHDi 180", year: 2017, body_type: "hatchback"};

car.power = "132 kw";

for (let x in car) {
  txt =txt + car[x] + " ";
}

console.log(txt);