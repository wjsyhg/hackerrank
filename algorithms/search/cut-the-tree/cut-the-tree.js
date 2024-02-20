// https://www.hackerrank.com/challenges/cut-the-tree/problem

function cutTheTree(data, edges) {
    const n = data.length;
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
        totalSum += data[i];
    }

    const adjacencyList = Array(n + 1).fill(null).map(() => []);

    for (let j = 0; j < edges.length; j++) {
        const [v1, v2] = edges[j];
        adjacencyList[v1].push(v2);
        adjacencyList[v2].push(v1);
    }

    const stack = [1];
    const order = [];
    const parent = Array(n + 1).fill(null);
    const visted = Array(n + 1).fill(false);

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visted[node]) {
            visted[node] = true;
            order.push(node);
            for (let neighbour of adjacencyList[node]) {
                if (!visted[neighbour]) {
                    stack.push(neighbour);
                    parent[neighbour] = node;
                }
            }
        }
        
    }

    const subtreeSum = Array(n + 1).fill(0);

    for (let x = order.length - 1; x >= 0; x--) {
        const node = order[x];
        subtreeSum[node] = data[node - 1]
        for (let neighbour of adjacencyList[node]) {
            if (parent[node] !== neighbour) {
                subtreeSum[node] += subtreeSum[neighbour];
            }
        }

    }

    
    let minDifference = Infinity;
    for (let y = 1; y <= n; y++) {
        minDifference = Math.min(minDifference, Math.abs(totalSum - subtreeSum[y] * 2));
    }

    return minDifference;
    
}