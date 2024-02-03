// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    // Write your code here
    const n = arr.length;
    let leftToRight = 0;
    let rightToLeft = 0;
    for (let i = 0; i < n; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][n - i - 1];
    }
    
    return Math.abs(leftToRight - rightToLeft);
}