/*
.reduce(): It reduces the elements of an array to a single value.
*/

const prices = [5, 130, 10, 25, 15, 20];

function sum(accumulator, element){
    return accumulator + element;
}


const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);