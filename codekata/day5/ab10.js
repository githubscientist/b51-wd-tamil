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
  //start-here
  //Your code goes here … replace the below line with your code logic

    let numbers = userInput[0].split(' ');
    let a = parseInt(numbers[0]);
    let b = parseInt(numbers[1]);
    let c = parseInt(numbers[2]);

    // X = {-b + √(b² - 4ac) }/ 2a
    // X = {-b - √(b² - 4ac) }/ 2a
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

    console.log(x1.toFixed(2));
    console.log(x2.toFixed(2));

  //end-here
});