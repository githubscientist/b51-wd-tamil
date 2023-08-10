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

    let afactors = [];
    let bfactors = [];

    let commonFactors = [];

    // find the factors of the numbers
    // generate the divisors
    for (let divisor = 1; divisor <= a; divisor++){
        if (a % divisor == 0) {
            // we have got the factor
            afactors.push(divisor);
        }
    }

    for (let divisor = 1; divisor <= b; divisor++){
        if (b % divisor == 0) {
            // we have got the factor
            bfactors.push(divisor);
        }
    }

    // iterate either one of the arrays
    for (let afactor of afactors) {
        if (bfactors.includes(afactor)) {
            commonFactors.push(afactor);
        }
    }

    console.log(Math.max(...commonFactors));


  //end-here
});