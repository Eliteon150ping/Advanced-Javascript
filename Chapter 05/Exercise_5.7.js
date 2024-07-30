let object = {
    a: 1,
    b: 2,
    c: 3,
};
for (let num in object){
    console.log(num ,object[num]);
}

let array = ["a", "b", "c"];
for (let w = 0; w < array.length; w++) {
    console.log(w, array[w]);
}
 
for (el in array) {
    console.log(el, array[el]);
}