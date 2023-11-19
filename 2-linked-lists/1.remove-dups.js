// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

// if no temporary buffer is allowed we would have to use two pointers to iterate every time if a node has duplicate so it would be O(n2) and O(1)
// current solution is O(n) O(n)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  display() {
    let current = this.head;
    let res = "";
    while (current) {
      res += current.data + " -> ";
      current = current.next;
    }
    res += "null";
    console.log(res);
  }

  removeNode(node, prev) {
    if (prev) {
      prev.next = node.next;
    } else {
      this.head = node.next;
    }
  }
}

function removeDups(linkedList) {
  let current = linkedList.head;
  let prev = null;
  let map = new Map();

  while (current) {
    if (!map.get(current.data)) {
      map.set(current.data, current);
      prev = current;
    } else {
      linkedList.removeNode(current, prev);
    }
    current = current.next;
  }
}

// tests, flemme d'ecrire une fonction pour les tests unitaires

const list = new LinkedList();
list.append(1);
list.append(3);
list.append(2);
list.append(3);
list.append(1);
list.display();
removeDups(list);
list.display();
