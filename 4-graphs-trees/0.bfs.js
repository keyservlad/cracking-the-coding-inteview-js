function bfs(node, graph) {
  let visited = new Set();
  let queue = [node];

  while (queue.length !== 0) {
    let current = queue.shift();

    if (visited.has(current)) continue;

    visited.add(current);

    let neighbors = graph.get(current);

    console.log(current);

    if (!neighbors) continue;
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

const graph = new Map();
graph.set(0, [1, 4, 5]);
graph.set(1, [3, 4]);
graph.set(2, [1]);
graph.set(3, [2, 4]);

bfs(0, graph);
