// Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an
// algorithm to create a binary search tree with minimal height.

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function createBinarySearchTree(array) {
  createNode(array, 0, array.length);
}

function createNode(array, start, end) {
  if (end < start) return null;

  let mid = Math.floor((start + end) / 2);

  const node = new BinaryTreeNode(array[mid]);
  if (!root) root = node;
  node.left = createNode(array, start, mid - 1);
  node.right = createNode(array, mid + 1, end);
  return node;
}

function inOrderTraversal(node, res = []) {
  if (node !== null) {
    inOrderTraversal(node.left, res);
    if (node.value !== undefined) res.push(node.value);
    inOrderTraversal(node.right, res);
  }
  return res;
}

// tests

var root = null;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

createBinarySearchTree(arr);
console.assert(arraysAreEqual(inOrderTraversal(root), arr));

console.log(inOrderTraversal(root));

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
