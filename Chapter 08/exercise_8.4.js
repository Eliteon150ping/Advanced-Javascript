let string = "hI, Do yOU lIkE PiZZa?";

function myFunction(str) {
    str = str.toLowerCase();
    let newString = [];
    let newWords = str.split(" ");
    newWords.forEach(word => {
        let temp = word.slice(0, 1).toUpperCase() + word.slice(1)
        newString.push(temp);

    });
    return newString.join(" ");

};
console.log(myFunction(string));



