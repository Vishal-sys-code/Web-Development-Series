/* 
Arrays: A variable like structures that can hold more than 1 value
*/

let fruits = ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

/* 
OUTPUT:
[ 'apple', 'orange', 'banana' ]
apple
orange
banana
undefined
*/

// ----------------------------------------------------------------------------

console.log("----------------------------");
fruits[3] = "coconut";
console.log(fruits);

console.log("----------------------------");
fruits.pop();
console.log(fruits);

console.log("----------------------------");
fruits.unshift("mango");
console.log(fruits);

console.log("----------------------------");
fruits.shift();
console.log(fruits);

console.log("----------------------------");
let len_fruits = fruits.length;
console.log(len_fruits);

console.log("----------------------------");
let index = fruits.indexOf("banana");
console.log(index);

console.log("----------------------------");
for(let i = 0; i < len_fruits; i++){
    console.log(fruits[i]);
}

console.log("----------------------------");
for(let fruit of fruits){
    console.log(fruit);
}

console.log("----------------------------");
fruits.sort();
for(let fruit of fruits){
    console.log(fruit);
}

console.log("----------------------------");
fruits.reverse();
for(let fruit of fruits){
    console.log(fruit);
}