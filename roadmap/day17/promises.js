/*
    Promise:
        A promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation
    
    Asynchronous Operation:
        the operations that run independently or without blocking the running of another task

        examples: network request, reading a file from a disk.
*/

// promises are used to handle asynchronous operations

// create a new Promise
// let promise = new Promise((resolve, reject) => {
//     // perform some asynchronous operation
//     let result = 5;

//     if (result > 10) {
//         resolve(result); // the promise gets resolved
//     } else {
//         reject('result is not greater than 10'); // reject the promise
//     }
// });

// // define the callbacks passed to the promise
// promise
//     .then(
//         // if the promise gets fulfilled, call the following function
//         (value) => {
//             console.log('Result:', value);
//         },
//         (error) => {
//             console.log('Error:', error);
//         }
// )

let promise = new Promise((resolve, reject) => {
    // perform some asynchronous operation
    let result = 11;

    if (result > 10) {
        resolve(result); // the promise gets resolved
    } else {
        reject('result is not greater than 10'); // reject the promise
    }
});

// define the callbacks passed to the promise
promise
    .then(
        // if the promise gets fulfilled, call the following function
        (value) => {
            console.log('Result:', value);
        })
    .catch(
        (error) => {
            console.log('Error:', error);
        }
    );