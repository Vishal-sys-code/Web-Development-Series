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
console.log("Adding the element at the last index: ");
fruits[3] = "coconut";
console.log(fruits);

console.log("----------------------------");
console.log("Popping Statement: ");
fruits.pop();
console.log(fruits);

console.log("----------------------------");
console.log("Unshift Method: ");
fruits.unshift("mango");
console.log(fruits);

console.log("----------------------------");
console.log("Shift Method: ");
fruits.shift();
console.log(fruits);

console.log("----------------------------");
console.log("Length of the array: ");
let len_fruits = fruits.length;
console.log(len_fruits);

console.log("----------------------------");
console.log("indexOf Method: ");
let index = fruits.indexOf("banana");
console.log(index);

console.log("----------------------------");
console.log("Traversing the array using the for-loops: ");
for(let i = 0; i < len_fruits; i++){
    console.log(fruits[i]);
}

console.log("----------------------------");
console.log("Traversing the array using the for-each loops: ");
for(let fruit of fruits){
    console.log(fruit);
}

console.log("----------------------------");
console.log("Sorting the array: ");
fruits.sort();
for(let fruit of fruits){
    console.log(fruit);
}

console.log("----------------------------");
console.log("Reversing the array: ");
fruits.reverse();
for(let fruit of fruits){
    console.log(fruit);
}