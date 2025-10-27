class Node{
    constructor (data){
        this.data = data;
        this.next = null;
    }
}

// Example creating Nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

// Linking Nodes
node1.next = node2;
node2.next = node3;

console.log(node1.data);         // 10
console.log(node1.next.data);   // 20