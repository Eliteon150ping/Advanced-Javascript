const myCar = {
    make: "Toyota",
    model: "Supra mk4",
    tires: 4,
    doors: 2,
    color: "blue",
    forSale: false
};

let propColor = "color";
myCar[propColor] = "red";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);
