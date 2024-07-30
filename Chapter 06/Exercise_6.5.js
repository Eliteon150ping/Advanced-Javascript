let value = "1000";

(function(){
    value = "1069";
    console.log(value);
})();

(function(result){
    console.log("The number is " + result);
    console.log(result);
})("69");
