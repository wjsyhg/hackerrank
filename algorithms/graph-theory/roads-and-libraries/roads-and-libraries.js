// https://www.hackerrank.com/challenges/torque-and-development/problem

function roadsAndLibraries(n, c_lib, c_road, cities) {
    if (c_lib <= c_road) {
        return n * c_lib;
    }

    const adjacencyList = Array(n + 1).fill(null).map(() => []);
    const visited = Array(n + 1).fill(false);

    for (let i = 0; i < cities.length; i++) {
        const [c1, c2] = cities[i];
        adjacencyList[c1].push(c2);
        adjacencyList[c2].push(c1);
    }

    let components = 0;
    for (let j = 1; j <= n; j++) {
        if (!visited[j]) {
            components++;
            dfs(j);
        }
    }

    return components * c_lib + (n - components) * c_road;


    function dfs(city) {
        visited[city] = true;
        for (let neighbour of adjacencyList[city]) {
            if (!visited[neighbour]) {
                dfs(neighbour);
            }
        }
    }

}