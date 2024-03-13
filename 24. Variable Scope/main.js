/*
Variable Scope: Where a variable is recognized and accessible (local vs global)
*/

// ------------ Global Scope ------------ 
var globalVariable = 10;
function myFunction() {
    console.log("Inside myFunction:", globalVariable); // Accessing globalVariable
}
console.log("Outside myFunction:", globalVariable); // Accessing globalVariable
myFunction(); // Calling myFunction

//In this example, globalVariable is declared outside of any function, making it a global variable. It can be accessed from anywhere within the script, including inside the myFunction function.

// ------------ Local Scope ------------ 
function myFunction() {
    var localVariable = 20; // localVariable has local scope within myFunction
    console.log("Inside myFunction:", localVariable); // Accessing localVariable
}
// Accessing localVariable here will cause a ReferenceError since it's not defined in this scope
myFunction(); // Calling myFunction

// In this example, localVariable is declared inside the myFunction function, making it a local variable. It is only accessible within the myFunction function.