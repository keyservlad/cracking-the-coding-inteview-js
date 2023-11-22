// scope

{
  var a = 0;
  //   let a = 0; a is not defined
  //   const a = 0; a is not defined
}

// console.log(a);

/* 
-----------------------------------------------------------------
*/

// shadowing

// note that we can shadow var variables by using let but not let variable by using var

function test() {
  var a = "Hello";
  let b = "Bye";

  if (true) {
    let a = "World";
    let b = "wd";
    // var b = "wd"; error
    console.log(a);
    console.log(b);
  }

  console.log(a);
}

// test();

/* 
-----------------------------------------------------------------
*/

// declaration

// fine
var dec = 2;
var dec = 3;

// not fine, const same
// let deci = 2;
// let deci = 3;

// this is fine (shadowing)
let deci = 2;

{
  let deci = 3;
}

/* 
-----------------------------------------------------------------
*/

// declaration with no init

var noInit;
let noInit2;
// const noInitConst; not fine

/* 
-----------------------------------------------------------------
*/

// reinit

var reinit = 1;
reinit = 2;

let reinitLet = 1;
reinitLet = 2;

const reinitConst = 1;
// reinitConst = 2; not fine

/* 
-----------------------------------------------------------------
*/

// Variables Hoisting

// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This behavior affects how variables and functions are initialized and accessed in your code.

// var hoisted = undefined is implicitly placed here during compilation

console.log(hoisted); // undefined
var hoisted = 4;
console.log(hoisted); // 4

// let and const are also hoisted but wont be assigned as undefined, they remain in the
// Temporal Dead Zone (TDZ) before they are assigned
// will throw a ReferenceError while in the TDZ on access, helping devs to catch error when a variable is initialized before it used
// used for error prevention, code clarity, and enforcement of a temporal order while using variables
// brought by ES6 (with const and let)


