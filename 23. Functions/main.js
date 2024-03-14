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

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(add(2,3));
console.log(subs(2,3));
console.log(mul(2,3));
console.log(div(2,3));
console.log(mod(2,3));
console.log(isEven(20));

console.log(isValidEmail("billgates.com"));
console.log(isValidEmail("billgates@micorsoft.com"));

/*
Situation 1:
hello(); // Function call before function definition
function hello(){
  console.log("Hello")
}

Situation 2:
function hello(){
  console.log("Hello");
}
hello(); // Function call after function definition

In Situation 1, the function hello() is called before its actual definition in the code. This is known as "hoisting". In JavaScript, function declarations are hoisted to the top of their containing scope during the compilation phase. So even though hello() is called before its actual definition, it still works because the function declaration has been hoisted to the top.
In Situation 2, the function call hello() occurs after the function definition. This is the more conventional way of calling functions.

So, functionally, there's no difference between the two situations. However, the order of code execution differs due to hoisting in the first situation. It's generally considered better practice to define functions before calling them for code readability and maintainability.
*/