// https://www.hackerrank.com/challenges/closest-numbers/problem

function closestNumbers(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        let currDiff = arr[i + 1] - arr[i];
        minDiff = Math.min(minDiff, currDiff);
    }
    
    const res = [];
    for (let j = 0; j < arr.length - 1; j++) {
        let currDiff = arr[j + 1] - arr[j];
        if (currDiff === minDiff) {
            res.push(arr[j]);
            res.push(arr[j + 1]);
        }
    }
    
    return res;
}