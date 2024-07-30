let array = [];
let multiplyBy = 7;

for (let x = 0; x < multiplyBy; x++) {
    const temp = [];
    for (let y = 0; y < multiplyBy; y++) {
        temp.push(x * y);
    }
    array.push(temp);
}

console.table(array); 