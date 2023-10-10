// destructuring: it will allow us to extract and assign the RValue to the respective variables or references provided as LValue

// let numbers = [5, 6, 7];

// // normal way without destructuring
// let x = numbers[0];
// let y = numbers[1];
// let z = numbers[2];

// console.log(x, y, z);

// let numbers = [5, 6, 7];

// // with destructuring
// let [x, y, z] = numbers;

// console.log(x, y, z);

// // with rest
// let numbers = [5, 6, 7, 8, 9, 10, 11, 12];

// // with destructuring
// let [x, y, z, ...rest] = numbers;

// console.log(x, y, z, rest);

// let book = {
//     name: 'dsa',
//     author: 'sathish', 
//     price: 2500
// }

// let { name, author, price: priceOfBook } = book;

// console.log(name, author, priceOfBook);


// let book = {
//     name: 'dsa',
//     author: 'sathish', 
//     price: 2500
// }

// let { name, author, price: priceOfBook } = book;

// console.log(name, author, priceOfBook);


// object property shorthand
let book = {
    name: 'dsa',
    author: 'sathish', 
    price: 2500
}

let { name, author, price: priceOfBook } = book;

// console.log(name, author, priceOfBook);

// let dsaBook = {
//     name: name,
//     author: author,
//     priceOfBook: priceOfBook
// }

let dsaBook = {
    name,
    author,
    priceOfBook
}


console.log(dsaBook);