/*
ARITHMETIC OPERATORS = OPERANDS (Values, Variables, etc.)
                       OPERATORS (+ - * /)
                       ex: 11 = x + 5;
*/

/* 

*/

let students = 30;
// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 1;
// students = students ** 1;
// students = students % 1; 

/* AUGMENTED SIGN OPERATOR*/
// students += 2;
// students -= 2;
// students *= 2;
// students /= 2;
// students %= 2;
// students **= 2;

// students++; // if we need to increase by one only
// students--; // if we need to decrease by one only

console.log(students);

/*
OPERATOR PRECEDENCE:
    1. Parenthesis ()
    2. Exponents
    3. Multiplication & division & modulo
    4. Addition & Substraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
// 1 + 2 * 3 + 4 ** 2 = 1 + 2 * 3 + 16 = 1 + 6 + 16 = 22 + 1 = 23

let result1 = 12 % 5 + 8 / 2;
console.log(result1);
// 12 % 5 + 8 / 2 = 12 % 5 + 4 = 2 + 4 = 6

let result2 = 6 / 2 ** (2 + 5);
console.log(result2);
// 6 / 2 ** (2 + 5) = 6 / 2 ** 7 = 6 / 128 = 0.046875