/*
    Task 1:

        - Create a `Book` class that has properties for `title`, `author` and `isbn`.

        - Implement a method `displayInfo` that prints the book's information

        - Create an object to the `Book` class with the name book1.

    Task 2:
        - Create a `Calculator` class that has methods for addition, subtraction, multiplication and division.

        - Implement the methods to perform these operations on two numbers.
*/

/*
    Task 1:

        - Create a `Book` class that has properties for `title`, `author` and `isbn`.

        - Implement a method `displayInfo` that prints the book's information

        - Create an object to the `Book` class with the name book1.
*/

// class Book {
//     constructor(title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }

//     displayInfo() {
//         console.log(`Book Info`);
//         console.log(`----------`);
//         console.log(`Title: ${this.title}`);
//         console.log(`Author: ${this.author}`);
//         console.log(`ISBN: ${this.isbn}`);
//     }
// }

// let book1 = new Book('DSA', 'Sathish', 'IB1234');

// book1.displayInfo();

/*
    Task 2:
        - Create a `Calculator` class that has methods for addition, subtraction, multiplication and division.

        - Implement the methods to perform these operations on two numbers.
*/

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    sub() {
        return this.a - this.b;
    }

    mul() {
        return this.a * this.b;
    }

    div() {
        return this.a / this.b;
    }
}

let calc = new Calculator(5, 6);

console.log(calc.add(), calc.sub(), calc.mul(), calc.div());