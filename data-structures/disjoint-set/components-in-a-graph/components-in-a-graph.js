// https://www.hackerrank.com/challenges/components-in-graph/problem

function componentsInGraph(gb) {
    const parent = {};
    const rank = {};
    const size = {};

    const find = (node) => {
        if (!parent[node]) {
            parent[node] = node;
            rank[node] = 0;
            size[node] = 1;
        }

        if (parent[node] !== node) {
            parent[node] = find(parent[node]);
        }

        return parent[node];
    };

    const union = (node1, node2) => {
        const root1 = find(node1);
        const root2 = find(node2);

        if (root1 === root2) return;

        if (rank[root1] > rank[root2]) {
            parent[root2] = root1;
            size[root1] += size[root2];
        } else if (rank[root1] < rank[root2]) {
            parent[root1] = root2;
            size[root2] += size[root1];
        } else {
            parent[root2] = root1;
            rank[root1]++;
            size[root1] += size[root2];
        }
    };

    gb.forEach(([node1, node2]) => {
        union(node1, node2);
    });

    const rootSizes = Object.values(parent).map(node => size[find(node)]);

    const minSize = Math.min(...rootSizes.filter(s => s > 1));
    const maxSize = Math.max(...rootSizes.filter(s => s > 1));
    
    return [minSize, maxSize];
}