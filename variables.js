// 3 wasto declare variables (var-,-let-,-const)
//JS ends with semicolm(however they are optional)

//prettier-ignore
var firstName = "Bobur";
// CamelCasing= firstName
//(1) (2) (3) (4)
/*
1. JS keywords denotes the creation of the variables(var, let, const)
2. Name of the variable that the devoloper will reference in order to use tre value that is stored
3.Assingment Operator
4.Initial Value it gets set to
*/

console.log("firstName", firstName) 
//! JS variables are Case Sensetive
//console.log("firstName", FirstName); // code breaks casing matters

// ? Reassigment of variables
// No need for for a [var, let, const] because the variable has already been decleared.
// Only the variable name folled by an = you can reassing value

//! Using var and let you CAN reassign however using const you CANNOT

firstName="Jasur"
console.log("firstName", firstName)

//Const Ex

const pi=3.14

//pi=4.2// Error cannot reassign a const

// Can you declare a VARIABLE without assigning it?

var lastName
console.log("lastName", lastName)

lastName="Smith"

console.log("lastName", lastName)

// Naming your variables is important. Stay away from single letter

//60*60*24
let seconds = 60
let minutes = 60
let hours = 24
let totalSeconds = seconds*minutes*hours
console.log("totalSeconds", totalSeconds)

// Create a Vareable used to store a current temp, console.log the current temp

var weatherTemp = 38
console.log('weatherTemp')
