// https://www.hackerrank.com/challenges/bfsshortreach/problem

function bfs(n, m, edges, s) {
    const adjacencyList = Array(n + 1).fill(null).map(() => []);

    for (let [node1, node2] of edges) {
        adjacencyList[node1].push(node2);
        adjacencyList[node2].push(node1);
    }

    const distances = Array(n + 1).fill(-1);
    const q = [s];
    distances[s] = 0;
    
    while (q.length) {
        const node = q.shift();
        for (let neighbour of adjacencyList[node]) {
            if (distances[neighbour] === -1) {
                q.push(neighbour);
                distances[neighbour] = distances[node] + 6;
            }
        }
    }

    const reorderedDistances = [...distances.slice(1, s), ...distances.slice(s + 1)];

    return reorderedDistances;
}