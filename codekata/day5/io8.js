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
    // let floats = userInput[0].split(' ');

    // for (let i = 0; i < floats.length; i++){
    //     console.log(floats[i]);
    // }

    // let i = 0;
    // while ( i < floats.length){
    //     console.log(floats[i]);
    //     i++;
    // }

    // let i = 0;
    // do {
    //     console.log(floats[i]);
    //     i++;
    // } while (i < floats.length);

    // for (let index in floats){
    //     console.log(floats[index]);
    // }

    // for (let float of floats){
    //     console.log(float);
    // }

    // floats.forEach((value) => {
    //     console.log(value);
    // });

    // console.log(floats.join('\n'));
    // console.log(userInput[0].split(' ').join('\n'));
    console.log(userInput[0].split('').join(','));
});