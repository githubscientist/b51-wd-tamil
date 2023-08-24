// 1. re-declarations
// // var vs let vs const
// var number = 25;

// // re-declarations allowed
// var number = 36;

// // re-assignment
// // number = 45;

// console.log(number);

// let number = 25;

// {
//     let number = 36;
//     console.log(number);
// }

// console.log(number);

// variables are changeables
// variables are labels that points to a memory location

// constants are the ones whose values once defined can't be changed.
// const number = 25;

// number = 36;

// console.log(number);

// const number = 25;

// {
//     const number = 36;
//     console.log(number);
// }

// console.log(number);

// 2. block scoped
// for (let index = 1; index <= 5; index++){
//     console.log(index);
// }

// console.log(index);

// for (var index = 1; index <= 5; index++){
   
// }

// console.log(index);

// function blockScopedVar() {
//     var x;

//     if (true) {
//         var x = 20;
//     }

//     console.log(x);
// }

// blockScopedVar();

// function blockScopedLet() {
//     let x = 20;

//     if (true) {
//         // let x = 20;
//         console.log(x);
//     }

//     console.log(x);
// }

// blockScopedLet();

// {
//     var x = 25;
//     console.log(x);
// }

// console.log(x);

// {
//     let x = 25;
//     console.log(x);
// }

// console.log(x);

// 3. hoisting
// console.log(x);

// var x = 5; 

// console.log(x);

// const x = 20;

// x = 25;

// console.log(x);

// const arrays can't be re-assigned with another value or arrays
// const arrays supports value re-assignments
// const numbers = [1, 2, 3, 4, 5];

// // numbers[0] = 10;
// // numbers[3] = 44;

// // numbers = [4, 5, 6];

// // numbers.push(7);

// // numbers.pop();
// // numbers.pop();
// // numbers.pop();
// // numbers.pop();
// // numbers.pop();

// // numbers = [];

// console.log(numbers);

// const book = {
//     title: 'dsa',
//     author: 'sathish'
// }

// book.title = 'codekata';

// // book = {};

// console.log(book);

// const x = 3.14;

// x = 3.15;

// console.log(x);

// const numbers = [4, 5, 6];

// numbers[10] = 4;

// console.log(numbers);

// var numbers = 'apple';

// const book = {
//     title: 'javascript',
//     author: 'krish'
// }

// console.log(JSON.stringify(book));

const resume = {
    name: 'sathish',
    contactDetails: {
        email: 'sathish@gmail.com',
        phone: 9080706050
    },
    skills: ['C', 'C++', 'Java', 'Python']
}

console.log(JSON.stringify(resume));