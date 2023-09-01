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

let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.push(10);
stack.pop();
stack.pop();
stack.pop();

// console.log(stack.peek());
console.log(stack.isEmpty());