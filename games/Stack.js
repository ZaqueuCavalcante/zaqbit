class Stack {
  constructor(item) {
    this.items = [];
    this.push(item);
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  top() {
    return this.items.slice(-1)[0];
  }
}
