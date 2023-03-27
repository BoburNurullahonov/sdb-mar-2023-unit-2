/* 
Types - Data Types
-STRINGS
-Numbers
-Boolean
*/
/*
!STRINGS
-datatypes used to represent text and they are wrapped in single quotes, double quotes, or backticks 
 */
let stringOne = "double quotes";
// prettier-ignore
let stringTwo='single quotes'
let stringThree = `backtick quote`;

// Combining Strings

let greeting = "GOOD MORNING";

let firstName = "Bobur";
//! Problem: Good Mornig and Bobur doesn't have space
console.log(greeting + firstName);

// Solution

console.log(greeting + " " + firstName);

let fullGreeting = `${greeting} ${firstName}`;
console.log(fullGreeting);

//! If you wanna know what "TYPE" the variable is you can use the keyword typeof

console.log(typeof firstName);

let word = "The brown fox";
console.log(word);

//let noSpace = word.

// To determine the size of the string you the .lenth method

let animal = "horse";
console.log(animal.length);
//Accessing the first letter it is zero based when it is a string
console.log(animal[0]);

let textData = "              Hello     ";

console.log(textData.trim());

let newLineString = "I went to the store yesterday. \nI bought eggs and milk";

console.log(newLineString);

//! NUMBERS

let currentTemp = 38;
console.log(typeof currentTemp);

let funkyNumber = 0.2 + 0.1;
console.log(funkyNumber);

let add1 = 2 + 1;
console.log(add1);

let totalMoney = (1999 + 1599) / 100;
console.log(totalMoney);

//! Be Careful of mismatching String and Number

let myAge = "42";
let friendAge = 34;
console.log(Number(myAge) + friendAge);
//parseInt(myAge)
//Add a (+) before the string variable
console.log(+myAge / friendAge);

let stringNumber = "23";
let stringExample = "abcd";

console.log(stringExample / 2);
//NaN=Not a Number

//! Number Operator
/* 
Adding numeber use +
Subtracting numbers use -
Multiplying numbers use(*)
Dividing numbers use(/)

Special Ones
Exponents use (**)
Modules(AKA: Remainder)
*/
//3
console.log(3 ** 3);
//21 / 10 = 2 R 1
console.log(21 % 10); // result: 1

//? How can I tell if number is even
console.log(33 % 2); // result in a reminder of 1 so it is odd
console.log(32 % 2); // result is a reminder of 0 so it is even

//? How do I take what I had before and add to it
let totalPrice = 0;
let item1 = 5;
totalPrice = totalPrice + item1;
console.log(totalPrice);

let item2 = 15;
totalPrice = totalPrice + item2;
console.log(totalPrice);

//! Booleans
// Booleans only have two possible values (true or false)

let isOver21 = true;
let isCloudy = false;

console.log(typeof isCloudy);
