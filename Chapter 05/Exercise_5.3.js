let myWork = [];
for( let i = 1; i < 11; i++){
    let stat = i % 2 ? true : false;
    let temp = {
         name: `Lesson ${i}`,
        status: stat
    };
    myWork.push(temp);

};
console.table(myWork);

