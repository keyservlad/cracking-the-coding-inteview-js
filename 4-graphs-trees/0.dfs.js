function dfs(node, graph) {
  let visited = new Set();
  let stack = [node];

  while (stack.length !== 0) {
    let current = stack.pop();

    if (visited.has(current)) continue;

    visited.add(current);

    console.log(current);

    let neighbors = graph.get(current);
    if (!neighbors) continue;
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }
}

const graph = new Map();
graph.set(0, [1, 4, 5]);
graph.set(1, [3, 4]);
graph.set(2, [1]);
graph.set(3, [2, 4]);

dfs(0, graph);
