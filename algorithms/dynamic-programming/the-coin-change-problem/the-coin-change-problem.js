// https://www.hackerrank.com/challenges/coin-change/problem

function getWays(n, c) {
    let ways = new Array(n + 1).fill(0);
    ways[0] = 1;

    for (let i = 0; i < c.length; i++) {
        for (let j = c[i]; j <= n; j++) {
            ways[j] += ways[j - c[i]];
        }
    }

    return ways[n];
}







