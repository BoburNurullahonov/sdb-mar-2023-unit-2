/* 
Functions;

-Functions provide a block of code that will only be ran it is 'called' upon.
-It start with a keyword 'function' followed by name you given your function.
-Functions do NOT nned to return value however they often 
-Functoins get hoisted meaning you can call on them priorto the function defination
*/


/* 
1.keyword "function"
2.Function Name
3.Inside the ()'s you have argument

*/

exapmle1();
//(1)      (2)
function exapmle1(){
    //any code indside here will be executed when the function is 'called
    console.log('Exapmle1 Function Was Executed')
}

// You must call the function for it to be back
exapmle1();



/* 
Function with Paramenters or Arguments
1.keyword "function"
2.Function Name
3.Inside the ()'s we can have unlimited parameter all separated by a comma

*/


function exapmle2(param1,param2){
    console.log("Example 2 function was executed")
    console.log("Param1:",param1)
    console.log("Param2:",param2)
}

exapmle2(10,5)
exapmle2("bobur","nurulla")
exapmle2()// runs but undified

function sumTwoNumbers(number1,number2){
let total = number1+number2
return total
}

let sum1 = sumTwoNumbers(10, 5);
let sum2 = sumTwoNumbers(20, 45);

console.log(sum1, sum2);

function calculateTax(cost, taxPercentage) {
  let totalTax = cost * taxPercentage;
  return +totalTax.toFixed(2);
}

let shoppingCartTotal = 21.99;
let checkoutTax = calculateTax(shoppingCartTotal, 0.08);
let checkoutTotal = sumTwoNumbers(shoppingCartTotal, checkoutTax);
console.log(checkoutTotal);


// ? Write a function that will take 3 arguements (length, width, height) 
// ? Function should return the volume of the Cubiod;

function calculateSize(height, width, length){
    let volume = length*width*height
    return volume 
}

let cuboit1=calculateSize(12,12,12)
console.log(cuboit1)


function convertDogAgeToHumanAge(dogAge) {
    let humanAge=(dogAge - 2) * 4 + 21;
    return humanAge
}
  console.log(convertDogAgeToHumanAge(5));