/*
.filter() = It creates a new array by filtering out elements
*/

let numbers = [1, 2, 3, 4, 5, 6, 7];

function isEven(element){
    return element % 2 === 0;
}

function isOdd(){
    return element % 2 !== 0;
}

let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);