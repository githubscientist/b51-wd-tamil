// declaration: telling the compiler that the variable x is there.
// let x;

// let x = 10;
// console.log(x);

// x = 5;
// console.log(x);
// var x = 10; // variable hoisted to the top of the scope

// console.log(x);

// hoisting: its a mechanism where the variable and function declarations are moved to the top of their containing scope
// we can use the variables and functions before they are declared

// console.log(word);


// var word;

// sayHello();

// function sayHello() {
//     console.log('hello!');
// }

// sayHello();

// let sayHello = () => {
//     console.log('hello!');
// }

// x = 10;
// x = 11;
// x = 32;
// console.log(x);
// var x = 5;
// console.log(x);

// scope refers to the visibility or accessibility of variables, functions and objects

// global scope

let word = 'apple';

function print() {
    let word = 'microsoft'; // local scope
    console.log(word);
}

print();

console.log(word);



// function print() {
//     let word = 'microsoft'; // local scope
//     console.log(word);
// }

// print();

// console.log(word);