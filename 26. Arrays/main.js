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

fruits[3] = "coconut";
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);

fruits.shift();
console.log(fruits);

let len_fruits = fruits.length;
console.log(len_fruits);

let index = fruits.indexOf("banana");
console.log(index);

for(let i = 0; i < len_fruits; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort();
for(let fruit of fruits){
    console.log(fruit);
}

fruits.reverse();
for(let fruit of fruits){
    console.log(fruit);
}