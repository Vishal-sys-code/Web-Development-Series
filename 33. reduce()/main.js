/*
.reduce(): It reduces the elements of an array to a single value.
*/

const prices = [5, 130, 10, 25, 15, 20];

function sum(accumulator, element){
    return accumulator + element;
}

// we can also write the sum function as:
/*
function sum(previous, next){
    return previous + next;
}
[5, 130, 10, 25, 15, 20]

First Process:
accumulator = 5
next = 130
sum = 135

Second Process:
accumulator = 135
next = 10
sum = 145

and so on...

*/

const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

// ------------------------------------------------------------

const grades = [75, 50, 90, 60, 65, 80, 95];
function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

const maximum = grades.reduce(getMax);
console.log(`The highest grade is ${maximum}`); 
const minimum = grades.reduce(getMin);
console.log(`The lowest grade is ${minimum}`);