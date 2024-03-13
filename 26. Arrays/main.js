/* 
Arrays: A variable like structures that can hold more than 1 value
*/

let fruits = ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits[3] = "coconut";
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);

fruits.shift();
console.log(fruits);