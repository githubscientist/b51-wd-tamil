// spread & rest prarameter
// both the operators notation is ...
// differentiated based on the place where they are used

// spread
// let numbers = [1, 2, 3, 4];

// console.log(...numbers); // spread operator: it takes out the values from the array and spreads it wherever we need as raw values
// console.log(1, 2, 3, 4);

// let odd = [1, 3, 5, 7];
// let even = [2, 4, 6, 8];

// let numbers = [...odd, ...even];
// let numbers1 = [1, 3, 5, 7, 2, 4, 6, 8 ]

// console.log(numbers);
// console.log(numbers1);

// rest operator
// the rest argument will receive any number of variable arguments passed via the function call and store it as an array
function sum(...values) {
    console.log(values.reduce((prev, curr) => prev + curr));
}

sum(5, 6, 7, 8);
