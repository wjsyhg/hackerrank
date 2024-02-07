// https://www.hackerrank.com/challenges/pairs/problem

function pairs(k, arr) {
    // Write your code here
    const set = new Set(arr);
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] + k)) {
            count++;
        }
    }
    return count;

}
