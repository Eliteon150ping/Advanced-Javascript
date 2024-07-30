let array = [];
for(let i = 0; i < 10;i++){
   array.push(i + 1); 
}
console.log(array);

for(let x = 0; x < array.length; x++){
    console.log(array[x]);

}
for(let y of array){
    console.log(y)
}
