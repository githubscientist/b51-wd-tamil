// spread and rest operator 
// ...

// let numbers = [1, 2, 3];

// console.log(...numbers);
// console.log(1, 2, 3);

// let numbers = [1, 2, 3];

// let copiedNumbers = [...numbers];

// numbers.push(4);
// copiedNumbers.push(5);

// console.log(numbers);
// console.log(copiedNumbers);

// let a = [1, 2, 3];

// let b = [...a];

// a.push(4);

// console.log(a);
// console.log(b);

// let a = 5;

// b = a;

// a = 6;

// console.log(a, b);

// let a = [1, 2, 3];

// let b = a;

// a.push(4);

// console.log(a);

// let a = [1, 2, 3];
// let b = [4, 5, 6];

// // let c = [...a, ...b];
// // let c = [...b, ...a];
// let c = [...a, ...b, 7, 8, 9];

// console.log(c);

// let a = [4, 5, 6];

// // console.log(...a);
// // console.log(4, 5, 6);

// let b = [...a];

// console.log(b);

// let book1 = {
//     title: 'dsa',
//     author: 'krish'
// }

// // console.log({ ...book });

// let book2 = {
//     ...book1
// }

// book1.title = 'javascript';

// console.log(book1);
// console.log(book2);

// let book1 = {
//     title: 'dsa',
//     author: 'krish'
// }

// let book2 = book1;

// book2.title = 'javascript';

// console.log(book1);
// console.log(book2);

// let book1 = {
//     title: 'dsa',
//     author: 'krish'
// }

// let book2 = {...book1};

// book2.title = 'javascript';

// console.log(book1);
// console.log(book2);

// let numbers = [100, 2, 30, 4, 5];

// // let maxValue = Math.max(...numbers);
// let maxValue = Math.max(23, 45, 12, 678, 13);

// console.log(maxValue);

// function findMax(a, b) {
//     return a > b ? a : b;
// }

// let a = [5, 6];

// console.log(findMax(...a));