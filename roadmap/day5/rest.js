// spread operator and rest operator are denoted by '...'
// spread is for expanding an iterable (array or object) to individual elements

// rest is used in function parameters to represent infinite number of arguments into an array

// function callMe(a, ...b) {
//     console.log(a);
    
//     for (let item of b) {
//         console.log(item);
//     }
// }

// callMe(5, 6, 7, 8, 9, 10, true, 'apple');

function findMax(...numbers) {
    let maxValue = numbers[0];

    for (let index = 1; index < numbers.length; index++){
        if (numbers[index] > maxValue) {
            maxValue = numbers[index];
        }
    }

    return maxValue;
}

let numbers = [400, 6, 7, 80, 2, 5, 9, 10];
console.log(findMax(...numbers));