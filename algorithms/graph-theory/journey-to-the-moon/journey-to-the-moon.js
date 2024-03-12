// https://www.hackerrank.com/challenges/journey-to-the-moon/problem

function journeyToMoon(n, astronaut) {
    // Write your code here
    const adjacencyList = Array(n).fill(null).map(() => []);
    for (let i = 0; i < astronaut.length; i++) {
        const[a1, a2] = astronaut[i];
        adjacencyList[a1].push(a2);
        adjacencyList[a2].push(a1);
    }
    
    const vistied = Array(n).fill(false);
    const countrySizes = [];
    
    let size = 0;
    for (let j = 0; j < n; j++) {
        if (!vistied[j]) {
            size = 0;
            dfs(j);
            countrySizes.push(size);
        }
        
        function dfs(node) {
            vistied[node] = true;
            size++;
            for (let neighbour of adjacencyList[node]) {
                if (!vistied[neighbour]) {
                    dfs(neighbour);
                }
            }
        }
    }
    
    let total = 0;
    for (let a1 = 0; a1 < countrySizes.length - 1; a1++) {
        for (let a2 = a1 + 1; a2 < countrySizes.length; a2++) {
            total += countrySizes[a1] * countrySizes[a2]; 
        }
    }
    
    return total;

    
}