/*
.map() = accepts a callback and applies that function to each element of an array, then return a new array.
*/

const numbers = [1,2,3,4,5]
const squares = numbers.map(square);
const cubes = numbers.map(cube);

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

console.log(squares);
console.log(cubes);