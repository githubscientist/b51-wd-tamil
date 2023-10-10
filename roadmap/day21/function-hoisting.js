// hoisting with functions


// sum(1, 2, 3, 4, 5, 6);
// sum(13345, 2323563546, 242436);
// sum(15, 6, 3);

// // function is hoisted
// // it works, because the function definition has been moved to the top of the file -> hoisting
// function sum(...values) {
//     let total = 0;
//     for (let value of values) {
//         total += value; 
//     }
//     console.log(total);
// }

// sum(1, 2, 3, 4, 5, 6);
// sum(13345, 2323563546, 242436);
// sum(15, 6, 3);

// var sum = function(...values) {
//     let total = 0;
//     for (let value of values) {
//         total += value; 
//     }
//     console.log(total);
// }

sum(1, 2, 3, 4, 5, 6);
sum(13345, 2323563546, 242436);
sum(15, 6, 3);

let sum = (...values) => {
    let total = 0;
    for (let value of values) {
        total += value; 
    }
    console.log(total);
}