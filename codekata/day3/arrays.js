// let numbers = [3, 5, 1, 6, 7, 2, 8, 4];

// to print the complete array
// console.log(numbers);

// to print a specific element
// to access first value of the array
// console.log(numbers[0])

// to access the 5th value of the array
// console.log(numbers[4]);


// console.log(numbers.length);

// for (let index = 0; index < numbers.length; index++){
//     console.log(index, numbers[index]);
// }

// let index = 0;
// while ( index < numbers.length){
//     console.log(index, numbers[index]);
//     index++;
// }

// let index = 0;
// do {
//     console.log(index, numbers[index]);
//     index++;
// } while (index < numbers.length);

// for (let index = 0; index < numbers.length; index++){
//     console.log(index, numbers[index]);
// }

// for...in loop
// for (let index in numbers){
//     console.log(index, numbers[index]);
// }

// let numbers = [3, 5, 1, 6, 7, 2, 8, 4];

// // for...of loop
// for (let value of numbers){
//     console.log(value);
// }

// for (let index = 0; index < numbers.length; index++){
//     console.log(index, numbers[index]);
// }

// let numbers = [4, 3, 5, 1, 2];

// for (let number of numbers) {
//     console.log(number);
// }

// let numbers = [4, 3, 5, 1, 2];

// to insert an element at the end of the array
// numbers.push(6);
// numbers.push(8, 7);

// to delete an element at the end of the array
// let deletedValue = numbers.pop();

// console.log(deletedValue);

// to insert an element at the beginning of the array
// numbers.unshift(10);
// numbers.unshift(12);

// to delete an element at the beginning of the array
// numbers.shift();
// numbers.shift();
// numbers.shift();

// numbers = [];

// to insert an element at a specific index
// numbers.splice(2, 0, 4);

// numbers.splice(4, 0, 12);
// numbers.splice(1, 0, 30);
// numbers.push(6);

// console.log(numbers);

// let first = numbers.indexOf(6, 0);


// console.log(numbers.indexOf(6, first + 1));

// for (let index in numbers) {
//     if (numbers[index] == 6) {
//         console.log(index);
//     }
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 6];

// for (let i = 0; i < numbers.length; i++){
//     for (let j = i + 1; j < numbers.length; j++){
//         if (numbers[i] == numbers[j]) {
//             console.log(i, j);
//         }
//     }
// }

// let numbers = [4, 3, 5, 1, 2];

// function printValue(value, index, array) {
//     console.log(value, index, array, array[index]);
// }

// numbers.forEach(printValue);

// let numbers = [4, 3, 5, 1, 2];

// numbers.forEach((value, index, array) => {
//     console.log(value, index, array, array[index]);
// });

// let numbers = [4, 3, 5, 1, 2];

// let print = (value, index) => console.log(value, index);

// numbers.forEach(print);

// let numbers = [4, 3, 5, 1, 2];

// console.log(numbers.join(':'));
