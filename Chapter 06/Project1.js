function Recursive(i){
    console.log(i);
    if(i < 10){
        return Recursive(i + 1);

    }
    return;
}
Recursive(0);
