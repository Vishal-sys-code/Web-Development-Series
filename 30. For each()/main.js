/*
forEach(): Method is used to iterate over the elements of an array and apply a specified function(callback) to each element.

array.forEach(callback)
element, index, array are provided.
*/

let numbers = [1, 2, 3, 4, 5];

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function display(element){
    console.log(element);
}

numbers.forEach(double);
numbers.forEach(display);

let fruits = [];
function display(){
     
}