// let person = {
//     name: 'krish',
//     age: 25,
//     salary: 10000
// }

// for (let key of Object.keys(person)) {
//     console.log(key, person[key]);
// }

// for (let key in person) {
//     console.log(key, person[key]);
// }

// for (let value of Object.values(person)) {
//     console.log(value);
// }

// person.name = 'sathish';

// console.log(Object.entries(person));

// // 1-D arrays
// let numbers = [1, 2, 3, 4, 5];

// // 2-D array: array of 1-D arrays
// let twod = [[1, 2], [3, 4], [5, 6]];

// // 3-D array: array of 2-D arrays
// let threed = [
//     [
//         [1, 2, 3], [4, 5, 6], [7, 8, 9]
//     ],
//     [
//         [10, 11, 12], [13, 14, 15], [16, 17, 18]
//     ],
//     [
//         [19, 20, 21], [22, 23, 24], [25, 26, 27]
//     ]
// ];

// console.log(threed[0][0][1]);

// let person = {
//     name: 'krish',
//     age: 25,
//     salary: 10000
// }

// let twod = Object.entries(person);

// console.log(twod[2][1]);

// let numbers = [4, 1, 3, 2, 5];

// numbers.sort((a, b) => b - a);

// console.log(numbers);

// let numbers = [[5, 2], [6, 3], [1, 7], [5, 10], [8, 4]];

// numbers.sort((a, b) => a[1]-b[1]);

// console.log(numbers);

// let person = {
//     name: 'krish',
//     age: 25,
//     salary: 10000
// }

// console.log(Object.entries(person));

// let words = ['cat', 'bat', 'apple', 'dog', 'frog', 'elephant'];

// words.sort((a, b) => a - b);

// console.log(words);

// let numbers = [4, 1, 3, 2, 5];

// let sorter = (a, b) => {
//     if (a < b) {
//         return 1;
//     } else if (a > b) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

// numbers.sort(sorter);

// console.log(numbers);

// callback functions: a function if passed as an argument to another function so that the another function can call the callback function later.

let words = ['cat', 'bat', 'apple', 'dog', 'frog', 'elephant', 'absolute'];

words.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
});

console.log(words);