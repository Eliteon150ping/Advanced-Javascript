let numMax = 5;
let randomNum = Math.floor(Math.random() * ++numMax);
console.log(randomNum);

let guess = false;
while (!guess) {
    let answer = parseInt(prompt("Pick a number from 1 to 5"));
    if (answer == randomNum) {
        alert("Correct");
        guess = true
    } else if (answer < randomNum) {
        alert("Incorrect, too low");

    } else {
        alert("Incorrect, too high");
    }


};