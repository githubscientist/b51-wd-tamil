// function Array(...args) {
//     this.items = [...args];

//     this.toArray = function(){
//         return this.items;
//     }

//     this.push = function (...data) {
//         this.items.push(...data);
//     }
// }

// let numbers = new Array(1, 2, 3, 4, 5);

// numbers.push(6);
// numbers.push(7);
// numbers.push(8);
// numbers.push(9, 10);

// // console.log(numbers.toArray());
// console.log(numbers instanceof Array);

// classes & constructors syntax
// class: a template or a blueprint for creating objects 
class Array {
    constructor(...args) {
        this.items = [...args];
    }

    toArray(){
        return this.items;
    }

    push(...data) {
        this.items.push(...data);
    }
}

let numbers = new Array(1, 2, 3, 4, 5);

numbers.push(6);
numbers.push(7);
numbers.push(8);
numbers.push(9, 10);

console.log(numbers.toArray());
// console.log(numbers instanceof Array);