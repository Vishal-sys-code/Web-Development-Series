/*
String Slicing: Creating a substring, from a portion of another string.

string.slice(start, end)
*/

const fullName = "Vishal Pandey";
let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 11);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

let x = fullName.slice(0, fullName.indexOf(" "));
let y = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

const email = "thisisvishalpandey@gmail.com";
let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));
console.log(username);

