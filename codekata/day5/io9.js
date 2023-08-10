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

//   console.log(userInput[0].split('').join('\n'));
    
    // for (let char of userInput[0]) {
    //     console.log(char);
    // }

    let string = userInput[0];

    for (let i = 0; i < string.length; i++){
        console.log(string[i]);
    }

  //end-here
});