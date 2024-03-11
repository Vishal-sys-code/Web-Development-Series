/*
ACCEPTING THE USER INPUT IN JAVASCRIPT HAS 2 METHODS:
    1. Easy Way: Window Prompt
    2. Professional Way: HTML Textbox
*/

// Window Prompt User Input
/*
let username;
username = window.prompt("What's your username?");
console.log(username);
*/

// Using HTML Textbox
let username;
document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById("myText").value;
    // console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`;
}