/*
Function Declaration: Define a resuable block of code that performs a specific task.

Function Expression: A way to define as value or variables.
*/

// FUNCTION DECLARATION
function hello_1(){
    console.log("Hello");
}

// FUNCTION EXPRESSION
const hello_2 = function(){
    console.log("Hello");
}
hello_2();

// FUNCTION AS AN ARGUMENT
setTimeout(function(){
    console.log("Hello");
}, 3000);

// ---------------------------------------------------------