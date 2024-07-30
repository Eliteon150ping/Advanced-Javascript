let string = "How's%20it%20going%3F";  //Create two variables
let string2 = "How's it going?";

let decode = decodeURIComponent(string);      //Decode  1st string
let encode = encodeURIComponent(string2);     //Encode  2nd string

console.log(decode);
console.log(encode);

let uri = "http://www.basescripts.com?=Hello World";  //Encode uri link
encode = encodeURI(uri);
console.log(encode);