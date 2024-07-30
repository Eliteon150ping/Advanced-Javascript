let future = new Date(2024, 4, 3);
console.log(future);

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "Septrmber", "October", "November", "December"];
let date = future.getDate();
let year = future.getFullYear();
let month = future.getMonth();

let time = "The future date is " + date + (month + 1) + year;
console.log(time);

