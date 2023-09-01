// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    // pushes/inserts the data to the top of the topmost element of the stack.
    push(data) {
        this.items.push(data);
        this.top++;
    }

    // returns the top most element of the stack
    peek() {
        return this.items[this.top];
    }

    // removes the top most element of the stack
    pop() {
        this.items.pop();
        this.top--;
    }

    // returns true if the stack is empty else false
    isEmpty() {
        return this.top == -1;
    }
}

inp.on("close", () => {
    let words = userInput[0].split(' ');
    
    // create an empty stack
    let stack = new Stack();

    // traverse the words array
    for (let word of words) {
        // check if the stack is empty
        if (stack.isEmpty()) {
            // stack is empty
            stack.push(word);
        } else {
            // stack is not empty
            if (word === stack.peek()) {
                // pop the stack
                stack.pop();
            } else {
                // if word and stack top most word are not equal
                // push the word to the stack
                stack.push(word);
            }
        }
    }

    // if stack is not empty
    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});