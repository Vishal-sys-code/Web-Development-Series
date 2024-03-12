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

if(age >= 16){
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

