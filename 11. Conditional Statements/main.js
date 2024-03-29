/* 
IF STATEMENTS: If a condition is true, execute some code if not then do something else.
*/

let age = 25;
if(age >= 18){
    console.log("Your are old enough to enter this site");
}
else{
    console.log("Your must be 18+ to enter this site");
}

// -------------------------------------------------------------------------

let time = 12;
if(time < 12){
    console.log("Good Morning!");
}
else{
    console.log("Good Afternoon!");
}

// -------------------------------------------------------------------------

let isStudent = false;
if(isStudent){
    console.log("Your are a student");
}
else{
    console.log("Your are NOT a student");
}

// -------------------------------------------------------------------------

let age_1 = 25;
let hasLicense = false;

if(age_1 >= 16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license!"); 
    }
    else{
        console.log("Your do not have your license yet!");
    }
}
else{
    console.log("Your must be 16+ to have a license");
}

// -------------------------------------------------------------------------

let age_2 = -1;
if(age_2 >= 18){
    console.log("You are old enough to enter this site");
}
else if(age_2 == 0){
    console.log("You can't enter. You were just born");
}
else if(age_2 < 0){
    console.log("Your age can't be below 0");
}
else if(age_2 >= 100){
    console.log("Your are too old to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}

// -------------------------------------------------------------------------

// Entering the HTML DOM as age conditional
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age_3;
mySubmit.onclick = function(){
    age_3 = myText.value;
    age_3 = Number(age_3);
    if(age_3 >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age_3 == 0){
        resultElement.textContent = "You can't enter. You were just born";
    }
    else if(age_3 < 0){
        resultElement.textContent = "Your age can't be below 0";
    }
    else if(age_3 >= 100){
        resultElement.textContent = "Your are too old to enter this site";
    }
    else{
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}