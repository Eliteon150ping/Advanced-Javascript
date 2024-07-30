// let one  = ()=> console.log('one'); 
// let two  = ()=> console.log('two'); 
// let three = () =>{
//     console.log('three'); 
//     one(); 
//     two(); 
// }
// let four = () =>{
//     console.log('four');  
//     setTimeout(one,0); 
//     three();
// }
// four();

let guessNames = ["Ann", "John", "Raiden", "Joe", "Gen", "Lary", "Lara", "Jordan", "Regal", "Zee"];
let question = prompt("What is your name?");

function check() {
    for (let i = 0; i < 10; i++) {
        if(question === guessNames.length){
            alert("Welcome, you are allowed in")
        }else{
            alert("Sorry, you are not allowed in ")
            break;
        }

    }
    
}
check(question)

