/*
.filter() = It creates a new array by filtering out elements
*/

/*
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
*/

// ------------------------------------------------------------

const ages = [16, 17, 18, 19, 20, 60];

function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}
function isRetire(element){
    return element >= 60;
}

const adults = ages.filter(isAdult);
const childrens = ages.filter(isChild);
const retirementAgePeople = ages.filter(isRetire);

console.log("Adults: ", adults);
console.log("Childrens: ", childrens);
console.log("Retired People: ", retirementAgePeople);