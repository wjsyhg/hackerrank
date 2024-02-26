// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let minAbsDiff = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        let currAbsDiff = arr[i + 1] - arr[i];
        minAbsDiff = Math.min(minAbsDiff, currAbsDiff);
    }
    
    return minAbsDiff;
}