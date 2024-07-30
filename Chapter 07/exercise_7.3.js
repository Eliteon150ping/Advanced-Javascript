class Animal {
    constructor(animal, sound) {
        this.animal = animal;
        this.sound = sound;
    }
    noise() {
        console.log("The " + this.animal + " goes " + this.sound )

    }
};

let animal1 = new Animal("Dog", "Bark");
let animal2 = new Animal("Cat", "Meow");

Animal.prototype.jump = function () {
    console.log("The " + this.animal + " is jumping ")
};

animal1.noise();
animal2.noise();
animal2.jump();
animal1.jump();