/* 
Callback: A function that is passed as an argument to another function.

This technique allows a function to call another function. A callback function can run after another function has finished.

Used to handle Asynchronous operations: 
1. Reading a file
2. Network Requests
3. Interacting with databases
*/

/*
function hello(){
    console.log("Hello!!!");
}

function goodBye(){
    console.log("GoodBye!!!");
}

// hello();
// goodBye();
hello(goodBye);
*/

/*
function hello(callback){
    console.log("Hello!!!");
    callback();
}

function goodBye(){
    console.log("GoodBye!!!");
}

hello(goodBye);
*/

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

sum(displayConsole, 2, 2);

function displayDOM(result){
    document.getElementById("myH1").textContent = result;
}