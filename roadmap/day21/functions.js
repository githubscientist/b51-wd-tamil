// functions are a block of statements that gets executed when we call it.

// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');

// function sayHello() {
//     console.log('Hello World!');
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();

// default value to the arguments
// function sayHello(name = 'Guest') {
//     console.log(`Hello ${name}`);
// }

// sayHello('Sathish');
// sayHello('Krish');
// sayHello();

// console.log(10 ** 2);

// function power(x, y) {
//     return x ** y;
// }

// // power(2, 3);
// // power(10, 2);

// // power(10.45, 3.6);

// let x = power(2, 3);
// let y = power(10, 2);

// console.log(x, y);

// named function
// function power(x, y) {
//     console.log(x ** y);
// }

// power(2, 5);

// nameless function or anonymous function
// let power = function (x, y) {
//     console.log(x ** y);
// }

// power(2, 5);

// arrow function
// let power = (x, y) => {
//     console.log(x ** y);
// }

// power(2, 5);

// let power = (x, y) => console.log(x ** y);

// power(2, 5);


// IIFE function: Immediately Invoked Function Expression
// its an anonymous function without any reference
// since it does not have any reference, we cannot call it later
// so, we should call it immediately after the function block.
((x, y) => {
    console.log(x ** y);
})(2, 5);

