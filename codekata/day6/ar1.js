// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    // input handling
    let n = parseInt(userInput[0]);
    let numbers = userInput[1].split(' ');
    
    // convert the array of strings to array of numbers
    for (let index = 0; index < n; index++){
        numbers[index] = parseInt(numbers[index]);
    }

    // calculate the frequencies of the numbers
    let frequency = {};

    for (let index = 0; index < n; index++){
        frequency[numbers[index]] = 0;
    }

    for (let index = 0; index < n; index++){
        frequency[numbers[index]]++;
    }

    let frequencies = Object.entries(frequency);

    frequencies.sort((a, b) => a[1] - b[1]);

    console.log(frequencies.map(item => item[0]).join(' '));
});