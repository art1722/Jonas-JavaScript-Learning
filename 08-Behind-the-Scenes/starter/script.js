'use strict';

// Scoping
function test2(c) {
  if (c == 3) {
    var reassign = 10; // var variable is function scoped
    const wrongVariable = 100; // let and const is block scoped
  }
  //   console.log(wrongVariable);
  const newVariable = 100;
  test3();
  test4();

  function test3() {
    if (a === 2) {
      // scope chain
      var noSibling = 'Sibling';
    }
  }
  function test4() {
    reassign = 20; // reassign
    const newVariable = 200; // create a newvariable
    console.log(
      `inside test4(): reassign=${reassign} newVariable=${newVariable}` // 20 200
    );
    // console.log(noSibling);
  }
  console.log(
    `inside test2(): reassign=${reassign} newVariable=${newVariable}` // 20 100
  ); // 20 100
}

let a = 2;
console.log(a);

console.log(name, typeof name, name.length); // don't use the 'name' variable - will have no error
test2(3);

// hoisting and TDZ in practice
function test1() {
  a += 5; // ReferenceError: Cannot access 'a' before initialization
  console.log(b); //ReferenceError: b is not defined
}
// test1();

// varFunction(); // varFunction is not a function
var varFunction = function () {
  return true;
};
console.log(varFunction === window.varFunction); // true

// the this keyword
console.log(this);
const globalThis = this;

const functionThis = function () {
  console.log('outside the nested function');
  console.log(this); // undefined
  const arrowInsideFunction = () => {
    console.log('Inside the nested function'); // undefined - due to lexical this scoping
    console.log(this);
  };
  arrowInsideFunction();
};
functionThis();

const arrowThis = () => {
  console.log(this);
  console.log(globalThis === this); // true
  return this; // false
};
console.log(this === arrowThis()); // true
