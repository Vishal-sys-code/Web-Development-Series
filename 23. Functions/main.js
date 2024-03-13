/* 
Functions: A section of reusable code. Declare code once, use it whenever you want. Call the function to execute that code.
*/

/*
function happyBirthday(){
    console.log("Happy Birthday");
}
happyBirthday();
*/

/*
function happyBirthday(username, age){
    console.log("Happy Birthday");
    console.log(`Happy Birthday ${username}`);
    console.log(`You are ${age} years old`);
}
happyBirthday("Vishal Pandey", 22);
happyBirthday("Doraemon", 25);
happyBirthday("Shinchan", 5);
*/

function add(x,y){
    let result = x + y;
    return result;
}
function subs(x,y){
    return x - y;
}
function mul(x,y){
    return x * y;
}
function div(x,y){
    return x / y;
}
function mod(x,y){
    return x % y;
}
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
    // return number % 2 === 0 ? true : false
}

console.log(add(2,3));
console.log(subs(2,3));
console.log(mul(2,3));
console.log(div(2,3));
console.log(mod(2,3));
console.log(isEven(20));