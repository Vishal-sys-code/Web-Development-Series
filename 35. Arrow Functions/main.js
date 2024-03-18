/* 
Arrow Functions = A consise way to write functions expressions good for
                  simple functions that you use only once.

(parameters) => some code
*/

function hello(){
    console.log("Hello");
}
hello();

const hello_1 = function(){
    console.log("Hello");
}
hello_1();

const hello_2 = () => console.log("Hello");
hello_2();

const hello_3 = (name) => console.log(`Hello ${name}`);
hello_3("Vishal Pandey");

const hello_4 = (name, age) => {console.log(`Hello ${name}`)
                           console.log(`Your are ${age} years old`)};  
hello_4("Vishal Pandey", 23);

setTimeout(hello, 3000);
function hello_5(){
    console.log("Hello");
}

setTimeout(function(){
    console.log("Hello");
}, 3000);

setTimeout(() => console.log("Hello"), 3000);