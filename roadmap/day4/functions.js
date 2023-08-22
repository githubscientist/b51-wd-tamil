// function is a block of statement which gets executed whenever we call it.
// reusability

// let a = 5;
// let b = 6;

// if (a < b) {
//     console.log(a, 'is the minimum value');
// } else {
//     console.log(b, 'is the minimum value');
// }

// a = 10;
// b = 7;

// if (a < b) {
//     console.log(a, 'is the minimum value');
// } else {
//     console.log(b, 'is the minimum value');
// }

// function findMinimum(a, b) {
//     if (a < b) {
//         console.log(a, 'is the minimum value');
//     } else {
//         console.log(b, 'is the minimum value');
//     }
// }

// let a = 5;
// let b = 6;

// findMinimum(a, b)

// a = 10;
// b = 7;

// findMinimum(a, b)

// function definition
// function greet(name) {
//     console.log('hello', name);
// }

// // function call
// greet('sathish');
// greet('krish');
// greet('prakash');

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 6));

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }


// let sum = add(5, 6);
// let product = multiply(5, 6);
// console.log(sum, product);

// console.log(5 ** 2);
// console.log(Math.pow(5, 2));

// function power(base, exponent) {
//     return base ** exponent;
// }

// let squareOf5 = power(5, 2);
// let cubeOf5 = power(5, 3);
// console.log(squareOf5, cubeOf5);


// function findMaximum(a, b) {
//     return a > b ? a : b;
// }

// console.log(findMaximum(510, 651));

// function types

// 1. named function
// function findMaximum(a, b) {
//     return a > b ? a : b;
// }

// console.log(findMaximum(510, 651));

// 2. nameless function or anonymous function
// let findMaximum = function (a, b) {
//     return a > b ? a : b;
// }

// console.log(findMaximum(510, 651));

// let findMaximum = function (a, b) {
//     return a > b ? a + ' is maximum' : b + ' is maximum';
// }

// console.log(findMaximum(510, 651));

// 3. arrow functions

// let findMaximum = (a, b) => {
//     return a > b ? a : b;
// }

// console.log(findMaximum(510, 651));

// 4. IIFE: Immediately Invoked Function Expression

// console.log(((a, b) => {
//     return a > b ? a : b;
// })(510, 651));

// ((a, b) => {
//     console.log(a > b ? a : b);
// })(510, 651)

// (function (a, b) {
//     console.log(a > b ? a + ' is maximum' : b + ' is maximum');
// })(5, 6);

// console.log((function (a, b) {
//     return a > b ? a + ' is maximum' : b + ' is maximum';
// })(5, 6));

// console.log((function (a, b) {
//     return a > b ? a + ' is maximum' : b + ' is maximum';
// })(55, 61));

// let maximum;

// (function (a, b) {
//     maximum = a > b ? a + ' is maximum' : b + ' is maximum';
// })(5, 6);

// console.log(maximum);

// let book101 = {
//     title: 'dsa',
//     author: 'sathish', 
//     price: 2000,
//     pages: 300, 
//     numberOfCopies: 120
// }

// function calculateTotalPrice(book) {
//     return book.numberOfCopies * book.price;
// }

// console.log(calculateTotalPrice(book101));

// function findEvenNumbers(numbers) {
//     for (let number of numbers) {
//         if (number % 2 == 0) {
//             console.log(number);
//         }
//     }
// }

// let numbers = [2, 3, 5, 7, 8, 6, 4]

// findEvenNumbers(numbers);

// function findEvenNumbers(numbers) {
//     let evenNumbers = [];
//     for (let number of numbers) {
//         if (number % 2 == 0) {
//             evenNumbers.push(number);
//         }
//     }
//     return evenNumbers;
// }

// let numbers = [2, 3, 5, 7, 8, 6, 4]

// console.log(findEvenNumbers(numbers));
// function toUpperCase(words) {
//     let upperCaseWords = [];
//     for (let word of words) {
//         upperCaseWords.push(word.toUpperCase());
//     }
//     return upperCaseWords;
// }


// let words = ['apple', 'microsoft'];

// console.log(toUpperCase(words));

// let sayHello = (name) => {
//     console.log('hello', name);
// }   

let sayHello = name => console.log('hello', name); 

sayHello('sathish');