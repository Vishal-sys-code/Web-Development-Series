/*
Method Chaining: Calling one method after another in one continuous of code.
*/

// ------------------ NO METHOD CHAINING ------------------

let username = window.prompt("Enter your username: ");
username = username.trim();
let letter = username.charAt(3);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);

// ------------------ METHOD CHAINING ------------------