// install the xhr2 library in the terminal
// for that in your terminal type the following:
// npm install xhr2

// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    console.log(data);
};

// send the http request
xhr.send();