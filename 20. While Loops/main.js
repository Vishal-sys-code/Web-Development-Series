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

/*
let username2 = "";
while(username2 === ""){
    username2 = window.prompt(`Enter Your Name`);
}
console.log(`Hello ${username2}`);
*/

// In this upper part of code the user must enter the username into the prompt and the output will be the Hello ${username}. The thing is when the prompt is being cancelled then the output is the Hello null. So, for taking the input from the user we need to take the input aggressively. So for that we need to add a condition of the username === null. Let's see into the next part of the code.

// --------------------------------------------------------------------------------------------------------------

/*
let username3 = "";
while(username3 === "" || username3 === null){
    username2 = window.prompt(`Enter Your Name`);
}
console.log(`Hello ${username3}`);
*/

// In this part of the upper code the Cancel button of the Prompt will not work. It will take the input aggressively.

// --------------------------------------------------------------------------------------------------------------

/*
So, for the Do-While Loop we need to know the syntax as we can do further process as same as the While loop.

Lets take the example of the last part of the code:

let username3 = "";
do{
    username2 = window.prompt(`Enter Your Name`);
}while(username3 === "" || username3 === null);
console.log(`Hello ${username3}`);
*/

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your Username`);
    password = window.prompt(`Enter your Password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log(`Invalid Credentials!!! Please try again`);
    }
}