// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = numbers.filter((value, index, array) => {
//     if (value == 5) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(result);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let result = numbers.filter((value, index, array) => {
// //     if (value%2 == 0) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // });

// let result = numbers.filter((value, index, array) => {
//     return value % 2 == 0;
// });

// console.log(result);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = numbers.filter((value, index, array) => {
//     return value >= 5;
// });

// console.log(result);

// let persons = [
//     ['Alice', 25],
//     ['Bob', 30],
//     ['Charlie', 22],
//     ['David', 40]
// ];

// // problem: to find the persons who are older than 30
// let filteredPersons = persons
//     .filter(person => person[1] >= 30)
//     .map(person => person[0]);

// console.log(filteredPersons);

let persons = [
    ['Alice', 25],
    ['Bob', 30],
    ['Charlie', 22],
    ['David', 40]
];

// problem: to find the persons who are older than 30
let filteredPersons = [];

// for (let person of persons) {
//     if (person[1] >= 30) filteredPersons.push(person[0]);
// }

persons.forEach(person => {
    if (person[1] >= 30) filteredPersons.push(person[0]);
});

console.log(filteredPersons);