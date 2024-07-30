let start = 10;
function countdown(val){
    console.log(val);
    if(val < 1){
        return;

    }
    return countdown(val -1);

}
countdown(start);
function countdown(val) { 
    console.log(val); 
    if (val > 0) { 
        val--; 
        return countdown(val); 
    } 
    return; 
    
} 
countdown(start);
