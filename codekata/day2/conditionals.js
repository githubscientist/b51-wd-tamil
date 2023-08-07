/*
    conditional statements

    1. if statement
    2. if...else statement
    3. multiple if...else statement
    4. nested if...else statement
*/

// // to check whether a number is a positive number
// let number = -5;

// if (number > 0) {
//     console.log('number is positive');
// }

// // to check whether a number is a positive number or negative number
// let number = 6;

// if (number > 0) {
//     console.log(number, 'is positive');
// } else {
//     console.log(number, 'is negative');
// }

// to check whether a number is a positive number or negative number or zero
// let number = 7;

// if (number > 0) {
//     console.log(number, 'is positive');
// } else if(number < 0){
//     // number is not greater than 0
//     // number is less than 0
//     console.log(number, 'is negative');
// } else {
//     // number = 0
//     console.log(number, 'is a zero');
// }


// let number = 7;

// if (number > 0) {
//     console.log(number, 'is positive');
// } else if (number == 0) {
//     console.log(number, 'is a zero');
// } else if (number < 0) {
//     console.log(number, 'is negative');
// }

// let number = 0;

// if (number > 0) {
//     console.log(number, 'is positive');
// } else {
//     // either the number is negative or zero
//     if (number < 0) {
//         console.log(number, 'is negative');
//     } else {
//         // definitely the number is zero
//         console.log(number, 'is zero');
//     }
// }

// switch case statements

// let number = 1;

// switch (number) {
//     case 1:
//         console.log('number is 1');
//         break;

//     case 2:
//         console.log('number is 2');
//         break;
    
//     case 3:
//         console.log('number is 3');
//         break;
    
//     default:
//         console.log('number is other than 1, 2 and 3');
//         break;
// }

// // to check whether a number is positive or negative or zero
// let number = -4;

// switch (number > 0) {
//     case true:
//         console.log(number, 'is positive');
//         break;

//     case false:
//         // either the number is negative or zero
//         switch (number < 0) {
//             case true:
//                 console.log(number, 'is negative');
//                 break;
//             case false:
//                 console.log(number, 'is zero');
//                 break;
//         }
//         break;
// }

// conditional operator or conditional expression or ternary operator
// ?:

// let number = -6;

// number > 0 ? console.log(number, 'is positive') : number < 0 ? console.log(number, 'is negative') : console.log(number, 'is zero');
