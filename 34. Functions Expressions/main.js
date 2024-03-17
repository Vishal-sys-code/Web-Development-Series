/*
Function Declaration: Define a resuable block of code that performs a specific task.

Function Expression: A way to define as value or variables.
*/

// FUNCTION DECLARATION
function hello_1(){
    console.log("Hello");
}

// FUNCTION EXPRESSION
const hello_2 = function(){
    console.log("Hello");
}
hello_2();

// FUNCTION AS AN ARGUMENT
setTimeout(function(){
    console.log("Hello");
}, 3000);

// ---------------------------------------------------------

// This is the function declaration
/*
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

function square(element){
    return Math.pow(element, 2);
}
console.log(squares);
*/

// This is the function expressions

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);