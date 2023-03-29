/* 
LOOPS:
Loops offer us a quick and easy way of doing something repeatedly.

There are many kinds of loops
- For statement
- While loop
*/

// ! DANGER: There is a danger of being stuck in an infinite loop
/* 
1: Sets the variable before the loop starts (initializes variable)
2: Conditial - run the loop until this statement is false
3: Counter - setting up the counter to add to the variable you set up in (1)
*/
//      (1)      (2)      (3)
for (let i = 0; i < 10; i = i + 1) {
    //   console.log(i);
  }
  
  //  How to display individual characters of a string using a loop.
  
  let word = "indianapolis";
  // console.log(word.charAt(1));
  for (let i = 0; i < word.length; i++) {
    console.log(word.charAt(i));
  }
  
  // ? Make a Pyramid using a loop.
  // Create a variable to hold the symbol of the (#)
  // Create a variable to tell the loop how tall you it
  // Inside the loop we want take whatever loop number we are on and console log that many symbols
  
  /* 
  #
  ##
  ###
  ####
  ######
  */
  
  /* 
  loop 8: 6
  loop 9: 5
  loop 10: 4
  loop 11: 3
  loop 12: 2
  loop 13: 1
  
  
  */
  
  let hashTag = "#";
  let height = 10;
  let reverseRepeatNumber = height - 1;
  
  for (let i = 1; i < height * 2; i++) {
    if (i <= height) {
      console.log(hashTag.repeat(i));
    } else {
      console.log(hashTag.repeat(reverseRepeatNumber));
      reverseRepeatNumber = reverseRepeatNumber - 1;
    }
  }
  
  
  // ! While Loops
  
  // Loops that will continue as long as the condition is true

  let i =0;
  while(i<10){
    console.log(i)
    i++
  }

  
  
  