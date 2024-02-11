// https://www.hackerrank.com/challenges/maxsubarray/problem

function maxSubarray(arr) {
    // Write your code here
    let n = arr.length;
    let maxSumEndingHere = Array(n);
    let maxSumSoFar = Array(n);
    maxSumEndingHere[0] = arr[0];
    maxSumSoFar[0] = arr[0];

    for (let i = 1; i < n; i++) {
        maxSumEndingHere[i] = Math.max(maxSumEndingHere[i - 1] + arr[i], arr[i]);
        maxSumSoFar[i] = Math.max(maxSumSoFar[i - 1], maxSumEndingHere[i]);
    }

    let maxSubarrSum = maxSumSoFar[n - 1];

    let maxSubseqSum = arr[0];

    for (let i = 1; i < n; i++) {
        if (arr[i] > 0 && maxSubseqSum > 0) {
            maxSubseqSum += arr[i];
        } else {
            maxSubseqSum = Math.max(maxSubseqSum, arr[i]);
        }
    }

}