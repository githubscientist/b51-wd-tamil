// arrays is a built-in datastructure
// that allows us to store more than one item (dissimilar)
// in a consecutive memory locations
// let numbers = [3, 5, 1, 6, 4, 2];

// to print the entire array
// console.log(numbers);

// to access a specific value 
// console.log(numbers[4]);

// to find the number of elements in the array
// console.log(numbers.length);

// numbers[2] = 10;

// arrays are mutable
// console.log(numbers);

// iteration or traversal

// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);

// let numbers = [3, 5, 1, 6, 4, 2];

// for (let index = 0; index<numbers.length; index++){
//     console.log(numbers[index]);
// }

// reverse print the array

// let numbers = [3, 5, 1, 6, 4, 2, 6, 7, 8];

// for (let index = numbers.length-1; index>=0; index--){
//     console.log(numbers[index]);
// }

// let numbers = [3, 5, 1, 6, 4, 2];

// let index = 0;
// for (; index<numbers.length; ){
//     console.log(numbers[index]);
//     index++;
// }

// let index = 0;
// while (index<numbers.length){
//     console.log(numbers[index]);
//     index++;
// }

// let index = 0;
// do {
//     console.log(numbers[index]);
//     index++;
// } while (index < numbers.length);

// for (let index in numbers){
//     console.log(numbers[index]);
// }

// let numbers = [3, 5, 1, 6, 4, 2];

// for (let number of numbers){
//     console.log(number);
// }

// for (let number = 1; number <= 10; number++){
//     console.log(number);
// }

// let numbers = [3, 5, 1, 6, 2, 4];

// for (let i in numbers) {
//     console.log(numbers[i]);
// }

// let index = 0;

// for (let i of numbers) {
//     console.log(index++, i);
// }

// create an empty array and store the squares of another array in it

// function doesExists(numbers, key) {
//     for (let number of numbers) {
//         if (number == key) return true;
//     }
//     return false;
// }

// let numbers = [3, 5, 1, 6, 2, ' ', 6];

// to check if an element exists in an array
// console.log(numbers.includes(15));
// console.log(doesExists(numbers, 15));

// console.log(numbers.includes(15));

// console.log(numbers.indexOf(6, 0));
// console.log(numbers.indexOf(6, 4));

// console.log(numbers.indexOf(' '));
// console.log(typeof (numbers[5]));

// let numbers = [3, 5, 1, 6, 2, 4];

// numbers.push(7);
// numbers.push(10, 11, 9, 8);

// console.log(numbers);

// let person = {
//     firstName: 'Sathish',
//     lastName: 'Gnanaprakasam',
//     age: 30,
//     isStudent: false,
//     hobbies: ['programming', 'reading', 'fishing']
// };

// console.log(person['firstName']);
// console.log(person['age']);
// console.log(person.hobbies);

// let fields = ['firstName', 'lastName', 'age', 'isStudent', 'hobbies'];
// let values = ['Sathish', 'Gnanaprakasam', 30, false, ['programming', 'reading', 'fishing']];

// let person1 = [['firstName', 'Sathish'], ['lastName', 'Gnanaprakasam']];

// let person1 = {
//     firstName: 'Sathish',
//     lastName: 'Gnanaprakasam',
//     age: 30,
//     isStudent: false,
//     hobbies: ['programming', 'reading', 'fishing']
// };

// let person2 = {
//     firstName: 'Sathish',
//     lastName: 'Gnanaprakasam',
//     age: 30,
//     isStudent: false,
//     hobbies: ['programming', 'reading', 'fishing']
// };

// Javascript object representation allows us to store
// multiple values in the form of key:value
// the key values acts as an index
// the keys and values does not necessarily in consecutive memory locations
// let person = {
//     'firstName': 'Sathish',
//     'lastName': 'Gnanaprakasam',
//     'age': 30,
//     'isStudent': false,
//     'hobbies': ['programming', 'reading', 'fishing']
// };

// person.age = 35;

// person.isVegetarian = false;

// delete person.hobbies;

// console.log(person);

// traverse or iterate the object
// for (let key in person) {
//     console.log(key, person[key]);
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// for (let key of Object.keys(person)) {
//     console.log(key, person[key]);
// }

// let person = {
//     'firstName': 'Sathish',
//     'lastName': 'Gnanaprakasam',
//     'age': 30,
//     'isStudent': false,
//     'hobbies': ['programming', 'reading', 'fishing']
// };

// console.log(person['firstName']);
// console.log(person.firstName);

// let book = {
//     author: 'sathish',
//     pages: 300,
//     price: 2000,
//     isAvailable: true,
//     title: 'dsa'
// }

// let books = [{
//     author: 'sathish',
//     pages: 300,
//     price: 2000,
//     isAvailable: true,
//     title: 'dsa'
// }, {
//     author: 'krish',
//     pages: 300,
//     price: 2000,
//     isAvailable: true,
//     title: 'dsa'
// },
// {
//     author: 'sathish',
//     pages: 300,
//     price: 2000,
//     isAvailable: true,
//     title: 'dsa'
// }];

// console.log(books[1].author);

// javascript object
// let book = {
//     author: 'sathish',
//     pages: 300,
//     price: 2000,
//     isAvailable: true,
//     title: 'dsa'
// }

// converted to JSON string
// console.log(JSON.stringify(book));

// JSON: JavaScript Object Notation string
// is a lightweight data interchange format to exchange between a server and a web application
// JSON string
// let jsonString = '{"author":"sathish","pages":300,"price":2000,"isAvailable":true,"title":"dsa"}';

// // converted to javascript object
// console.log(JSON.parse(jsonString));