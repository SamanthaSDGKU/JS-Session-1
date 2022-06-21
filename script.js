console.log("Hello world!");
//declaration
var userName;
//assign the value
userName="Cory";
userName='Nana';
let userAge=99;
console.log(userName);

let userEmail="sjimenez@sdgku.edu";// declaration and assign
const url="www.sjimenez.com.mx";//constant (it can't change)

userEmail="tim@gmail.com";

console.log(userEmail);


// document.write("<p> User Name: " + userName + "</p><p> User email: "+userEmail+ " </p> <p>User Age: " + userAge + "</p><p>Webpage: " + url + "</p>"); // :'(

document.write(`
    <p>Name: ${userName} </p>
    <p>Age: ${userAge} </p>
    <p>Email: ${userEmail} </p>
    <p>URL: ${url}</p>
    `); // :)