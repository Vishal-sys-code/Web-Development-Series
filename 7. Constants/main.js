/*
CONSTANTS: A variable that can't be changed.
*/

let PI = 3.14159;
let radius;
let circumference;

/* USER INPUT THROUGH THE WINDOW PROMPT */

/*
radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);
circumference = 2 * PI * radius;
console.log(circumference);
*/

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}