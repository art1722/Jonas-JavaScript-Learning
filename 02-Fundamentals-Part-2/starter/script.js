"use strict";

///////////////////////////////////////
// 03_032 activating strict mode
// 1. forbid us to do certain things
// 2. create visible errors for us in certain situations
// let interface = "Dollar"; // SyntaxError: Unexpected strict mode reserved word
let interfase = "Dollar";
if (interfase === "Dollar") {
  // interfast = "Euro"; // ReferenceError: interfast is not defined
  interfase = "Euro";
}

// 03_033 functions
function myAddition(literalSyntax, b) {
  console.log(literalSyntax + b);
}

console.log(myAddition(3, 4, "N/A")); // function will return undefined

// 03_034_035 - function declaration vs function expression vs arrow functions

// function declaration
console.log(distance1(60, 2));
function distance1(pace, time) {
  return pace * time;
}

// function expression
const distance2 = function (pace, time) {
  return pace * time;
};
console.log(distance2, distance2(80, 2)); // [Function: distance2] 160

// arrow function
const distance3 = (pace, time) => distance2(pace, time);
console.log(distance3, distance3(100, 2)); // [Function: distance3] 200

// array creation
// 2 ways to create an array in javascript
let literalSyntax = [1, 2, 3, 4];
let arrayFunction = new Array(5, 6, 7, 8, 9);

console.log(arrayFunction[arrayFunction.length - 1]); // access the last element
console.log(arrayFunction[arrayFunction.length]); // common mistake -> undefined
arrayFunction[1] = literalSyntax;
arrayFunction[2] = "17";
arrayFunction[3] = arrayFunction;
arrayFunction[4] = arrayFunction[0];
console.log(arrayFunction); // <ref *1> [ 5, [ 1, 2, 3, 4 ], '17', [Circular *1], 5 ]

console.log(typeof literalSyntax); // object
console.log(literalSyntax + 5);
console.log(typeof (literalSyntax + 5)); // string
console.log(literalSyntax - 5);

// basic array method (function)
console.log(literalSyntax);
console.log("  |   ");
console.log("  ------->");
literalSyntax.push(literalSyntax.shift()); // rotate the array
console.log(literalSyntax);
console.log("\t   |");
console.log("\t<---");
literalSyntax.unshift(literalSyntax.pop()); // rotate the array back
console.log(literalSyntax);

console.log(literalSyntax.indexOf("2")); // strict equality
console.log(literalSyntax.includes("2")); // since ES6
console.log(literalSyntax.indexOf(2)); // strict equality
console.log(literalSyntax.includes(2));

// object + dot and brackets notation
console.log("object and its method");
const currentYear = 2030;
const birthYear = 1990;
const myObject = {
  name: "Peter",
  age: currentYear - birthYear,
  passportKey: "asdfjkl;",
  hasPassport: function (passport) {
    return passport && passport === this.passportKey && this.age > 18;
  },
  hasPassport2: (passport) => passport === "asdfjkl;",
  // NOTE: chatGPT: arrow function don't have their own 'this' binding
  // so they inherit the 'this' from the enclosing scope
}; // The object literal syntax

console.log(myObject.age);
console.log(myObject.hasPassport("asdfjkl;"));
console.log(myObject.hasPassport2("asdfjkl;"));

// for and while loop
// This is like the modified version of monopoly game

// from the given reverse transportation order
// print out the string that shows my transportation order in normal sequence
// "" is equal to waiting for the next transportation order
// and it's guarantee that "" will not be first in the array

// I also roll the dict while transporting
// the dice roll will stop if I get the number of 6, and we'll get to the next transportation
// If I roll more than three consecutive dices without getting to the next transportation
// (not getting the 6)
// then we'll go to jail, and this modified monopoly game will end
const myTransportationOrder = ["walking", "bus", "", "train", "", "walking"];
let dice, diceCount, jailFlag;
for (let i = myTransportationOrder.length - 1; i >= 0; i--) {
  if (!myTransportationOrder[i]) {
    console.log(`...Waiting for the ${myTransportationOrder[i - 1]}`);
    continue;
  }

  console.log(
    `>>> Number ${myTransportationOrder.length - i}, I transport by ${
      myTransportationOrder[i]
    }`
  );

  dice = Math.trunc(Math.random() * 5) * 6;
  diceCount = 0;
  while (dice !== 6) {
    diceCount += 1;
    console.log(`Rolling the dice ${diceCount} times.`);

    dice = Math.trunc(Math.random() * 5) * 6;
    if (dice !== 6 && diceCount >= 3) {
      console.log("You are going to jail, bye!!!");
      jailFlag = true;
      break;
    }
  }
  if (diceCount === 0) {
    console.log("Without dice rolling");
  } else if (jailFlag === true) {
    break;
  }
}
if (!jailFlag) {
  console.log("To the destination ❤");
}
