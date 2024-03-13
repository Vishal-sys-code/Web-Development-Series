/* 
Spread Operator: "..." allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)
*/

let numbers = [1, 2, 3, 4, 5];
let max_num = Math.max(numbers);
let min_num = Math.min(numbers);
let max_num_spread = Math.max(...numbers);
let min_num_spread = Math.min(...numbers);

console.log(numbers);
console.log(max_num);
console.log(min_num);
console.log(max_num_spread);
console.log(min_num_spread);

/* 
Output: 
NaN
NaN
5
5

Here, NaN has been displayed because the array couldn't be directly put into the max or min method of javascript. 
So thats why we need the spread operator.
*/

let username = "Vishal Pandey";
let letters = [...username];
let letters1 = letters.join("-");
console.log(letters);
console.log(letters1);

let fruits = ["apple", "orange", "banana"];
let newfruits = [...fruits];
console.log(fruits);
console.log(newfruits);

let fruits1 = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);