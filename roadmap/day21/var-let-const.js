// var x; // hoisting
// variables or references
// variables are changeables
// variables are labels that points to a memory location

// var x = 10;

// console.log(x);

// let x = 10;

// console.log(x);

// const x = 10;

// console.log(x);

// re-declaration is not allowed for let keyword in the same block
// let x = 10;

// let x = 3.14;

// console.log(x);

// re-assignment
// let x = 10;

// x = 3.14;

// console.log(x);

// hoisting
// x = 10;
// y = 20;

// nameOfPerson = 'sathish';

// console.log(nameOfPerson);

// let x;

// console.log(x); // Cannot access 'x' before initialization


// console.log(x);

// hoisting: its just a behaviour where the variable declarations or the function declarations moved to the top of the file.

// x = 10;
// console.log(x);
// var x = 15;

// scoping: it tells the visibility of a reference/variable
// global scope, function scope, block scope, local scope

// let x = 10; // global scope

// if (x == 10) {
//     let x = 3.14; // re-declaration // local scope // known only to if block
//     console.log('x equals', x);
// }

// for (; x >= 10; x--){
//     console.log('x equals', x);
// }

// {
//     console.log('x equals', x);
// }

// console.log('x equals', x);

// function func() {
//     console.log('x equals', x);
// }

// func();

// constants with arrays and objects
// const pi = 3.14;

// pi = 3.156; // assignment to constant variable

// console.log(pi);

const array = [1, 2, 3, 4, 5];

// array[0] = 10;

array = [10, 2, 3, 4, 5];

console.log(array);