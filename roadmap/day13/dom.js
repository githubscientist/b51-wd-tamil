// console.log('works!');

// document.getElementById('info').innerText = `Welcome, Krish!`;

// create a new paragraph
// let loggedInfo = document.createElement('p');

// loggedInfo.textContent = 'This is a new Paragraph added using Javascript';

// document.body.appendChild(loggedInfo);

// create a list with two items 'coffee' and 'tea'
// 1. create a new list item or reference
// let list = document.createElement('ul');

// // 3. Create list items and append it to the list
// let listItem1 = document.createElement('li');

// listItem1.textContent = 'Coffee';

// let listItem2 = document.createElement('li');

// listItem2.textContent = 'Tea';

// list.appendChild(listItem1);
// list.appendChild(listItem2);

// // 2. append the list to the body
// document.body.appendChild(list);

// let html = document.createElement('html');
// let head = document.createElement('head');
// let body = document.createElement('body');

// html.appendChild(head);
// html.appendChild(body);

// console.log(html);

// document.getElementById('info').textContent = '';

// let items = ['coffee', 'tea', 'green tea', 'lemon juice'];

// let list = document.createElement('ul');

// items.forEach(item => {
//     let listItem = document.createElement('li');
//     listItem.textContent = item;
//     list.appendChild(listItem);
// });

// // change the propety of the list
// // list.style.listStyleType = 'square';

// list.setAttribute('style', 'list-style-type: circle; ');

// list.style.color = 'green';

// document.body.appendChild(list);

// // appendChild Vs append
// let parent = document.getElementById('parent');

// let header = document.createElement('h1');
// header.textContent = 'append header';

// let paragraph = document.createElement('p');

// paragraph.textContent = 'appendChild Vs append methods';

// // parent.appendChild(header);
// // parent.appendChild(paragraph);

// parent.append(header, paragraph);

// let link = document.createElement('a');

// link.setAttribute('href', 'https://www.google.com');
// link.setAttribute('target', '_blank');
// link.setAttribute('title', 'Open Link in New Tab');
// link.setAttribute('id', 'googleLink');
// link.setAttribute('class', 'googleLinkClass');

// link.textContent = 'Visit Google';

// document.body.append(link);

// let divs = document.getElementsByClassName('myDiv');

// // console.log(divs[1]);

// for (let index = 0; index < divs.length; index++){
//     divs[index].style.color = 'blue';
// }

// console.log(document.querySelectorAll('div')[2]);

// document.querySelectorAll('.myDiv')[2].style.color = 'red'

document.body.innerHTML = `<div class="myDiv">
            This is div 1 with class myDiv
        </div>

        <div class="myDiv">
            This is div 2 with class myDiv
        </div>

        <div class="thirdDiv">
            This is div 3 with class thirdDiv
        </div>

        <p class="myDiv">
            paragraph
        </p>`;

let myDivs = document.querySelectorAll('.myDiv');

for (let index = 0; index < myDivs.length; index++){
    myDivs[index].style.color = 'red';
}