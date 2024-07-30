let numberArray = [1, 2, 3, 4, 5, 6];

let myFunction = numberArray.map((numberArray) => {
    return numberArray * 2
});
console.log(myFunction);

let numberArray2 = numberArray.map((numberArray) => numberArray * 2);

console.log(numberArray2);