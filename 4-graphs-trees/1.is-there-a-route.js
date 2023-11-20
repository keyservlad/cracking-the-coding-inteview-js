// Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
// route between two nodes.

// can use both bfs and dfs here
function isThereARoute(node1, node2, graph) {
  return dfs(node1, node2, graph);
}

function dfs(node1, node2, graph) {
  let visited = new Set();
  let stack = [node1];

  while (stack.length !== 0) {
    let current = stack.pop();
    if (current === node2) return true;
    if (visited.has(current)) continue;

    visited.add(current);

    let neighbors = graph.get(current);
    if (!neighbors) continue;

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }
  return false;
}

const graph = new Map();
graph.set(0, [1, 4, 5]);
graph.set(1, [3, 4]);
graph.set(2, [1]);
graph.set(3, [2, 4]);

console.assert(isThereARoute(0, 2, graph) === true);
console.assert(isThereARoute(3, 0, graph) === false);
