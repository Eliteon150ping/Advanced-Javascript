function Recursive(num) {
    console.log(num);
    if (num === 0) {
        return 1;

    } else {
        return num * Recursive(--num);
    }

}
console.log(Recursive(5));