// Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  add(item) {
    this.stack1.push(item);
  }

  remove() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) return null;
      while (!(this.stack1.length === 0)) {
        let el = this.stack1.pop();
        this.stack2.push(el);
      }
    }
    return this.stack2.pop();
  }
}

// tests

let queue = new MyQueue();
queue.add(1);
console.assert(queue.remove() === 1);
queue.add(2);
queue.add(3);
queue.add(4);
console.assert(queue.remove() === 2);
console.assert(queue.remove() === 3);
console.assert(queue.remove() === 4);
console.assert(queue.remove() === null);
queue.add(5);
queue.add(6);
queue.add(7);
console.assert(queue.remove() === 5);
