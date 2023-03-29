/*
! CONDOTIONALS
-We use conditional when a decision to be made
-The condition need to either be truthy or falcey
-Tool we have available for decision making are the following
    - if statements
    - if else statement
    - if else if - statement
    - turnary
 */


//? create an if statement for the condition using 24hr clock if its before 12pm console.log ("good morning")

let currentHour = 18

//console.log(currentHour < 12)
    /* 
    1.Keyword- if to start the if statement
    2. Conditional - must result in a truth
     */
    //(1) (2) 
    if (currentHour<12){
        // inbetween the brackets is considered a block of code
        //this block of code will be executed if the conditional is true
    console.log("Good Morning")
}

//! Example of it -ELSE statement
if (currentHour<12){
    console.log("Good Morning")
} else{
    console.log("good afternoon")
}

//! Example of -else if- else statement

if(currentHour<12){
    console.log("Good Morning")
} else if(currentHour<17){
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}

//? Write a conditional based on age will store in a variable the price of the movie ticket
// Child Price - 5(age 10)
// Adult Price - 10
// Senior Price - 8 (age 55)
// Addon Challenge
// Military discount to senior and adult ticket discount of 1 dollor off

let age = 20
let priceOfTicket = 0
let isMilitaryDiscount = true


if(age <= 10){
    priceOfTicket=5
} else if(age>=55){
    priceOfTicket=8
    isMilitaryDiscount === true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket)
}else{
    priceOfTicket=10
    isMilitaryDiscount === true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket)
}
console.log('Price of the ticket is $'+ priceOfTicket)

/*
1. Conditional that will result in a true or false
2. Add a(?) and what is on the right side of the questionmark up to the colin is what will happen if it is true
3. Code for the Truth
4. Truth of false divider
5. Code for thed false

isMilitaryDiscount === true ? (priceOfTicket = priceOfTicket)
:(priceOfTicket=priceOfTicket)
 */

// ? Write an if esle statement to determin if the current seconds are odd or even.
//? If its even console.log "The current second is 22 and it is even"
//? If it's odd console.log "The current second is 23  and it is odd"

//! BONUS: See if you can create a turnary to solve this...

let currentTime = new Date()
let currentTimeInSecond = currentTime.getTime() /1000

//.log(currentTimeInSecond%2===0
//if(currentTimeInSecond%2===0){
if(randomNum(2,5)%2===0 ) {
    console.log(`The cunrent second is ${currentTimeInSecond} and it's even`) 
} else{
    console.log(`The currnet second is ${currentTimeInSecond} and it is odd`)
}
currentTimeInSecond%2===0 ?    console.log(`The cunrent second is ${currentTimeInSecond} and it's even`)
:console.log(`The currnet second is ${currentTimeInSecond} and it is odd`)

function randomNum(min, max) {
    let range = max - min + 1;
    
    return Math.floor(Math.random() * range) + min;
  }



//! Switches

let randomNumber = 7
let color = ""
switch(randomNumber){
    case 1: 
        color = "red"
        break;
    case 2:
        color="blue"
        break
    case 3:
        color="pink"
        break
    case 4:
        color="purple"
        break
    case 5:
        color="white"
        break
    case 6:
    case 7:
        color="green"
        break
    default:
        color="unknown"
}
console.log(color)
