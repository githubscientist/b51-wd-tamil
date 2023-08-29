// let numbers = [1, 2, 3, 4, 5];
// let numbersToBePushed = [6, 7, 8, 9, 10];

// // in-place method
// console.log(numbers.push(...numbersToBePushed));

// console.log(numbers);

// let numbers = [10, 20, 30, 40, 50];

// map method: It will create an array of the same size
// It will apply a function to each of the elements in the array
// and stores those values in an array and returns it.

// let squarer = (value, index, array) => {
//     console.log(value, index, array);
// }

// numbers.map(squarer);

// let squarer = (value, index) => {
//     console.log(index);
// }

// function squarer (value, index){
//     console.log(index);
// }

// let squarer = function(value, index){
//     console.log(index);
// }

// numbers.map(squarer);

// Problem: Given an array of numbers, square all the numbers

// without using map method
// let numbers = [5, 6, 3, 1, 7, 8, 4, 2];

// for (let index = 0; index < numbers.length; index++){
//     numbers[index] = numbers[index]**2;
// }

// console.log(numbers);

// using map method
// let numbers = [5, 6, 3, 1, 7, 8, 4, 2];

// let squarer = (value, index, array) => {
//     return value ** 2;
// }

// numbers = numbers.map(squarer);

// console.log(numbers);

// ---------
// let numbers = [5, 6, 3, 4, 2];

// numbers = numbers.map((value, index, array) => value ** 2);

// console.log(numbers);

// let numbers = [5, 6, 3, 1, 7, 8, 4, 2];

// numbers = numbers.map((value, index, array) => {
//     return value == 3;
// });

// console.log(numbers);

// let numbers = [5, 6, 3, 4, 2];

// numbers.forEach((value, index, array) => {
//     console.log(value);
// });

