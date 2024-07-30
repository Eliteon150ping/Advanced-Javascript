let myArr = [];

for(i = 0; i < 10; i++){
    let num1 = i * 5;
    let num2 = i * i;
    let solution = calculate(num1,num2, "+");
    myArr.push(solution);
};

function calculate(a, b, op) {
    if (op == "+") {
        console.log(a + b);
    } else {
        console.log(a - b)
    }

};
