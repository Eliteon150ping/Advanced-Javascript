class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let person1 = new Person("Rishen", "Surjoobhalee");
let person2 = new Person("John","Doe");

console.log(`Hello ${person1.firstname}!`);
console.log(`Hello ${person2.firstname}!`);
