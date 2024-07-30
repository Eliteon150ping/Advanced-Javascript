class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullName() {
        return `${this.firstname} ${this.lastname}`

    }
}
let person1 = new Person("Rishen", "Surjoobhalee");
let person2 = new Person("John", "Doe");

console.log(person1.fullName());
console.log(person2.fullName());

