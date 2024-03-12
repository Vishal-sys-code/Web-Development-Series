/*
    OPERATOR        MEANING
    =           Assignment Operator
    ==          Comparision Operator (compare if values are equal)
    ===         Strict Equality Operator (compare if values & datatype are equal)
    !=          Inequality operator
    !==         Strict inequality operator
*/

const PI = 3.14

// Using of "==" operator
console.log("------ Example of "==" Operator ------");
if(PI == "3.14"){
    console.log("That is PI");
}
else{
    console.log("This is not PI");
}

// Using of "===" operator
console.log("------ Example of "===" Operator ------");
if(PI === "3.14"){
    console.log("That is PI");
}
else{
    console.log("This is not PI");
}