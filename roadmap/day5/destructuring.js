// destructuring is for extracting the values from the arrays or objects into distinct variables

// let principal = 10000
// let years = 2
// let interest = 10

// let simpleInterest = (principal * years * interest) / 100;

// let totalAmount = principal + simpleInterest;

// console.log(totalAmount);

// let values = [1000, 2, 10];

// let principal = values[0];
// let years = values[1];
// let interest = values[2];

// let simpleInterest = (principal * years * interest) / 100;

// let totalAmount = principal + simpleInterest;

// console.log(totalAmount);

// destructuring
// let [principal, years, , interest] = [1000, 2, 10, 120];

// let simpleInterest = (principal * years * interest) / 100;

// let totalAmount = principal + simpleInterest;

// console.log(totalAmount);

// let numbers = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = numbers;

// console.log(first, second);
// console.log(rest);

// let a = 5;
// let b = 6;

// // swapping
// // let c = a;
// // a = b;
// // b = c;

// // swapping without using third variable
// // using destructuring
// [a, b] = [b, a];

// console.log('a = ', a);
// console.log('b = ', b);

// let book = {
//     title: 'js',
//     author: 'krish'
// }

// // destructuring
// // let { title, author } = book;

// let title = book.title;
// let author = book.author;

// console.log(title);
// console.log(author);

// let book = {
//     title: 'js',
//     author: 'krish'
// }

// // destructuring
// let { title: label, author: writer } = book;


// console.log(label);
// console.log(writer);


function callMe(values) {
    let weight = values[0];
    let height = values[1];

    console.log(weight, height);
}

callMe([65, 175]);

// function callMe([weight, height]) {
//     console.log(weight, height);
// }

// callMe([65, 175]);

// function callMe({weight, height}) {
//     console.log(weight, height);
// }

// callMe({weight: 65, height: 175});