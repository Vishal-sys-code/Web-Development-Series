/*
Rest Parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array.

1. Spread = expands an array into seperate elements.
2. Rest = bundles seperate elements into an array
*/

function openFridge(...foods){
    console.log("--------------------------");
    console.log("Rest Parameters: ", foods);
    console.log("--------------------------");
    console.log("Spread Operator: ", ...foods);
    console.log("--------------------------");
}

function getFood(...foods){
    return foods
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);
const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

function sum(...numbers){
    let res = 0;
    for(let number of numbers){
        res += number;
    }
    return res;
}

const answer = sum(1,2,3,4,5,6,7,8,9,10);
console.log(`Your Total Bill is $${answer}`);