// https://www.hackerrank.com/challenges/angry-children/problem

function maxMin(k, arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let minUnfairness = Infinity;
    const n = arr.length;
    for (let i = 0; i < n - k + 1; i++) {
        let currUnfairness= arr[i + k - 1] - arr[i];
        minUnfairness = Math.min(minUnfairness, currUnfairness);
    }
    return minUnfairness;
}