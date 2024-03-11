/* 
------------- MATHEMATICS IN JAVASCRIPT -------------
Built in Object that provides a collection of properties and methods
*/

console.log(`The value of PI is: ${Math.PI}`);
console.log(`The value of E is: ${Math.E}`);


let x = 3.99;
let y = 2.13;
let z;
let a = 45;

console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.round(x));

console.log(Math.floor(y));
console.log(Math.ceil(y));
console.log(Math.round(y));

console.log(z);

// z = Math.trunc(a);
// console.log(z);

// z = Math.pow(a,x);
// console.log(z); 

// z = Math.log(a);
// console.log(z);

z = Math.sin(a);
// console.log(z);

let max = Math.max(x,y,z);
let min = Math.min(x,y,z);
console.log(max);
console.log(min);