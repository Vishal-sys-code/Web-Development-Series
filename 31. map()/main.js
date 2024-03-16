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

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}

const studentsUpper = students.map(upperCase);
console.log(studentsUpper);

const studentsLower = students.map(lowerCase);
console.log(studentsLower);