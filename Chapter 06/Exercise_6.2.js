let description = ["Big", "Small", "fast", "green"]; 

function myName(){
    let question = prompt("What is your name?");
    let random = Math.floor(Math.random()* description.length);
    console.log(description[random] + " " + question);
};
myName();