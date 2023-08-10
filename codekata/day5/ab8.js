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
    // formula (0°C × 9/5) + 32 = 32°F
    let celcius = parseInt(userInput[0]);
    let fahrenheit = (celcius * 9 / 5) + 32;
    // console.log(fahrenheit.toFixed(2));
    console.log(Math.round(53.4321 * 100)/100);
});