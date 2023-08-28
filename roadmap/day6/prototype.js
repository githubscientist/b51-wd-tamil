/*
    Prototype: 
        - It allows us to add methods and properties to objects
        - It also allows us to enable inheritance and sharing of behavior between the objects
*/

// // function prototype
// function Person(name) {
//     this.name = name;
// }

// // create objects or instances
// let person1 = new Person('Alice');
// let person2 = new Person('Krish');

// console.log(person2);

// function Tablet() {
//     this.name = 'TABLET';
//     this.price = 0.0;
//     this.color = 'white';
// }

// let tablet1 = new Tablet();
// let tablet2 = new Tablet();

// console.log(tablet1, tablet2);

// function Student(name) {
//     this.name = name;

//     this.greet = function () {
//         console.log(`Hello! my name is ${this.name}`);
//     }
// }

// let student101 = new Student('Krish');
// let student102 = new Student('Sathish');

// let students = [student101, student102];

// students[1].greet();


// function Student(name, email, phone) {
//     let student = {};
//     student.name = name;
//     student.email = email;
//     student.phone = phone;

//     return student;
// }

// let student101 = Student('sathish', 'sathish@gmail.com', 9080706050);

// console.log(student101);


// function Student(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;

//     this.sayHello = function () {
//         console.log(`hello, ${this.name}`);
//     }
// }

// let student101 = new Student('sathish', 'sathish@gmail.com', 9080706050);
// let student102 = new Student('krish', 'krish@gmail.com', 5060708090);
// student102.sayHello();

// function Student(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;

//     this.sayHello = function () {
//         console.log(`hello, ${this.name}`);
//     }

//     this.printDetails = function () {
//         console.log(`
// Student Details:
//     Name: ${this.name},
//     Email: ${this.email},
//     Phone: ${this.phone}
//         `)
//     }

//     this.printEmail = function() {
//         console.log(`Email ID: ${this.email}`);
//     }
// }

// Student.prototype = {
//     printEmail() {
//         console.log(`Email ID: ${this.email}`);
//     }
// }

// Student.prototype.age = 25;

// let student101 = new Student('sathish', 'sathish@gmail.com', 9080706050);
// let student102 = new Student('krish', 'krish@gmail.com', 5060708090);
// // console.log(student102.age);
// // student102.printDetails();
// student101.sayHello();
// student101.printEmail();

// let numbers = new Array(1, 2, 3, 4, 5);
// let factors = new Array(2, 3, 5);

// numbers.push(6);

// console.log(numbers);