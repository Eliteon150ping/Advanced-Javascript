let names = ["Rishen", "John", "Joe", "Rishen", "Regal", "Joe"];

let array = names.filter((value, index, array) => {
    console.log(value, index, array.indexOf(value))
    return array.indexOf(value) === index;
});

console.log(array);

