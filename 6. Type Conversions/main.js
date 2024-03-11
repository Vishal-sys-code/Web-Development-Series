/*
Type Conversion: Change the datatype of a value to another (Strings, Numbers, Booleans)
*/

let age = window.prompt("How old are you?");
age = Number(age);
age+=1;
console.log(`The age is: ${age}`);
console.log(`The type of variable age is: ${typeof age}`);

// ----------------------------------------------------------------------------------------------

let x = "Pizza";
let y = "Pizza";
let z = "Pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);