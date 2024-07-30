let string = "I love Javascript";
string = string.toLowerCase();

let vowels = ["a","e","i","o","u"];

vowels.forEach((letter, index)=> {
    console.log(letter);
    string = string.replaceAll(letter,index);

});
console.log(string);

