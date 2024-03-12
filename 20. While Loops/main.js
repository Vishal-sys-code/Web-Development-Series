/*
While Loop: Repeat some code WHILE some condition is true. 
*/

/*
let username = "";
while(username === ""){
    console.log("You didn't enter your name");
}
console.log(`Hello ${username}`);
*/

//This upper program will print the message log of "You didn't enter your name" upto infinity.

// --------------------------------------------------------------------------------------------------------------

/*
let username1 = "Vishal Pandey";
while(username1 === ""){
    console.log("You didn't enter your name");
}
console.log(`Hello ${username1}`);
*/

// Output: Hello Vishal Pandey

// --------------------------------------------------------------------------------------------------------------

let username2 = "";
while(username2 === ""){
    username2 = window.prompt(`Enter Your Name`);
}
console.log(`Hello ${username2}`);

// In this upper part of code the user must enter the username into the prompt and the output will be the Hello ${username}. The thing is when the prompt is being cancelled then the output is the Hello null. So, for taking the input from the user we need to take the input aggressively. So for that we need to add a condition of the username === null. Let's see into the next part of the code.

// --------------------------------------------------------------------------------------------------------------

