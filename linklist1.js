class Node{
    constructor (data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add node to end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  // Add node to start
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  // Find a node by value
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Remove a node by value
  remove(value) {
    if (!this.head) return;

    // if head is to be removed
    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (!current.next) this.tail = current;
        return;
      }
      current = current.next;
    }
  }

  // Print all node values
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.print(); // 5 -> 10 -> 20

list.remove(10);
list.print(); // 5 -> 20

console.log(list.find(20)); // Node { value: 20, next: null }
