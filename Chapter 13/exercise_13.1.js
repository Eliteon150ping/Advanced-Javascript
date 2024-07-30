function greet(fullName) {

    console.log(fullName);
};

function fname(fullName, callback){

    let newArray = fullName.split()
    callback(newArray);
};

fname("Rishen", greet);