// install the xhr2 library in the terminal
// for that in your terminal type the following:
// npm install xhr2

// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// handle the response data
xhr.onload = function () {
    let users = JSON.parse(xhr.responseText);

    let userNames = [];

    for (let user of users) {
        userNames.push(user['name']);
    }

    console.log(userNames);
};

// send the http request
xhr.send();