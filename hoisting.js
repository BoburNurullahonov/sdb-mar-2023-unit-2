/* 
Hoisting:

let and const do not get hoisted

var will hoisted and if you access it before it is initialized and assigned you will get an undefined.
*/

console.log(firstName);
// let firstName = "Rob";

var firstName = "bob";

/* 
SCOPE:

Var vs Let
- the introduction of ES6 came the introduction of let and const
- Using Let or Const you can NOT reference a variable before it is initialized.


- when it comes to scope - JS will try to look for the variable in it's current block first then it will look outwards.

- a variable created in a code block can not be accessed outside of the block.

- JS has three types of scope Block Scope - Functional Scope - Global Scope

*/

function greeting() {
  console.log("Good Afternoon " + firstName);
}

greeting();

function greeting2() {
  let firstName = "Jimbo";
  console.log("Good Afternoon " + firstName);
}
// ? What first name will it use?
greeting2();

// ? Do I get ROB or JIMBO
console.log(firstName);

function greeting3() {
  firstName = "Betty";
  console.log("Good Afternoon " + firstName);
}
// ? What first name will it use?
greeting3();

// ? What first name will I get "Rob" or "Betty"
console.log(firstName);

function greeting4(firstName) {
  console.log("Good Afternoon " + firstName);
}

greeting4("Barney");

var x = 12;

function varTest() {
  var x = 33;
  if (1 == 1) {
    var x = 45;
    console.log(x); // 45?
  }
}

console.log(x); // 12?
varTest();




