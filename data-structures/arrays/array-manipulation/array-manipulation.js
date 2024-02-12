// https://www.hackerrank.com/challenges/crush/problem

function arrayManipulation(n, queries) {
    // Write your code here
    const arr = Array(n + 2).fill(0);
    for (let i = 0; i < queries.length; i++) {
        const [a, b, k] = queries[i];
        arr[a] += k;
        arr[b + 1] -= k;
    }
    
    let max = 0;
    for (let j = 1; j <= n; j++) {
        arr[j] += arr[j - 1];
        max = Math.max(max, arr[j]);
    }
    return max;
}