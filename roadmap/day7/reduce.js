// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
// }, 10);

// console.log(result);

// remove the duplicates from an array
// let numbers = [5, 3, 5, 6, 7, 3, 5, 6, 4, 2, 2, 5];

// let uniqueNumbers = numbers.reduce((previousValue, currentValue) => {
//     //  check if the currentValue exists in the previousValue array
//     if (previousValue.includes(currentValue)) {
//         return previousValue;
//     } else {
//         // previousValue.push(currentValue);
//         // return previousValue;
//         return [...previousValue, currentValue];
//     }
// }, []);

// console.log(uniqueNumbers);

// console.log(numbers.includes(15));

// let numbers = [5, 3, 5, 6, 7, 3, 5, 6, 4, 2, 2, 5];

// let uniqueNumbers = []; 

// for (let index = 0; index < numbers.length; index++){
//     if (!uniqueNumbers.includes(numbers[index])) {
//         uniqueNumbers.push(numbers[index]);
//     }
// }

// console.log(uniqueNumbers);