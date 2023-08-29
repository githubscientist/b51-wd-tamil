class Book {
    constructor(title, author, price, pages) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._pages = pages;
    }

    // getTitle() {
    //     return this.title;
    // }

    // getAuthor() {
    //     return this.author;
    // }

    // setTitle(title) {
    //     this.title = title;
    // }

    get title() {
        return `title: ${this._title}`;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    set price(newPrice) {
        this._price = newPrice * 2;
    }

    get price() {
        return this._price;
    }
}

let book1 = new Book('dsa', 'sathish', 2000, 400);

// book1.setTitle('oops');

// console.log(book1.getTitle());

// console.log(book1.title);

book1.price = 1500;

console.log(book1.price);