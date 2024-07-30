let myTable = [];
let numOfRows = 3;
let numOfColumns = 4;

let counter = 0;
for (let i = 0; i < numOfRows; i++) {
    let tempTable = [];
    for (let x = 0; x < numOfColumns; x++) {
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable)
}
console.table(myTable);