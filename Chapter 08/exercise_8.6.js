console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));
console.log(Math.random());
console.log(Math.floor(Math.random() * 11));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 100) + 1);


function randomNumber(min, max) {

    for (let i = 0; i < 100; i++) {
        let randomNum = Math.floor(Math.random() * (min + max))
        console.log(randomNum);

    }
};

randomNumber(1, 100)




