// 02_009 values and variables

let js = "amazing";
// if (js === "amazing") alert("JavaScript is amazing!");

console.log(1/2);

// 02_011 data types
let number_1 = 25;
let number_2 = 25.0;
let number_3 = null;
let number_4;
console.log(typeof number_1, typeof number_2);
console.log(number_3, typeof number_3, number_4, typeof number_4); // null object undefined undefined

// 02_012 var let const
// var is function scoped, and let is block scoped
// const isFalse; // SyntaxError: Missing initializer in const declaration
const isTrue = true;
// isTrue = false; // TypeError: Assignment to constant variable.
if (isTrue) {
    var myVarBirthYear = 1990;
    let myLetBirthYear = 1990;
}
// console.log(myBirthYear); // ReferenceError: myBirthYear is not defined
console.log(myVarBirthYear); // works perfectly fine

function getBirthYear() {
    var myVarFunctionBirthYear = 1992;
    let myLetFunctionBirthYear = 1992;
}
// console.log(myVarFunctionBirthYear); // ReferenceError: myVarFunctionBirthYear is not defined
// console.log(myLetFunctionBirthYear); // ReferenceError: myLetFunctionBirthYear is not defined


// 02_013 Basic operator & 02_014 Operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
let x = 10, y = 10;
let a, b; 
// postfix before prefix -x++ is -11 not -9
// relational operators before equality operators
// grouping postfix prefix expo multiplicative additive relational equality assignment
a = b = true === 500 <= 0 - -1 + -2*2 + 2 ** 3 ** 2 + -x++ // -3 + 512 - 10 (why: x is returned before increment)
console.log(0 - -1 + -2*2 + 2 ** 3 ** 2 + -y++)
console.log(a, x) // x will now be 11 (not -11 -9 or 9)
a = b = true === 499
console.log(a) // true

console.log(- - - - 1) // 1
console.log(- - - - - 1) // -1

// 02_020 Type conversion and coersion
let myNumber = Number("015" + String(15) + ".15");
let myNaN = Number("015" + String(15) + ".15" + ".0");
console.log(myNumber, myNaN);

let numNum = 3 + 3;
let numString = 3 + '3';
let stringNum = '3' + 3;
let stringString = '3' + '3';
console.log(numNum, numString, stringNum, stringString) // at least one string will result in concatenation
//// 6 33 33 33

let randomOp1 = 3 + '3' * 4 // operator precedence still applied here in type coercion
let randomOp2 = 3 + ('3' * 4)
let randomOp3 = (3 + '3') * 4 // 33 * 4 === 132
let randomOp4 = 3 + "3" ** "4"
console.log(randomOp1, randomOp2, randomOp3, randomOp4)
//// 15 15 132 84


// 02_021 truthy and falsy values
// 5 falsy values: 0 "" undefined null NaN
console.log(Boolean('0'));
console.log(!!10 + 1); // 2
console.log(true + 2); // 3

// 02_023 equality operators
// we can only convert to string, number, boolean, we can't convert to null or undefined
console.log(null == undefined);
console.log("" == undefined);
console.log(0 == "");
console.log(0 === "")
// true false true false

// 02_026 switch statement
x = 10, y = "10"
switch(y) {
    case 10:
    case 20:
        console.log("x is less than 30");
    case 30:
        console.log("x is less than 40");
    default:
        console.log("unknown");
        break;
} // without a break: in case of x, will execute all codes // y will go to default
// Notice that we use strict comparison here

// 02_028 ternary operator
// e.g. conditionally declare variable, in template literal
const age = 18
const drive = age >= 18 ? "Yes" : "No"
const driveId = 12354
const driveApplyStatus = 
`${drive === "Yes" ? `Driver Id ${driveId} is qualified` : "You are disqualified"}, 
thank you for applying!!!`
console.log(driveApplyStatus);