// https://www.hackerrank.com/challenges/maxsubarray/problem

function maxSubarray(arr) {
    // Write your code here
    let maxSubarrSum = arr[0];
    let sum;
    let start = 0;
    while (start < arr.length) {
        let i = start;
        sum = arr[start];
        maxSubarrSum = Math.max(maxSubarrSum, sum);
        while (sum > 0 && i < arr.length - 1) {
            i++;
            sum += arr[i];
            maxSubarrSum = Math.max(maxSubarrSum, sum);
        }
        if (i === arr.length - 1) {
            break;
        }
        start = i + 1;
    }
    
    let maxSubseqSum = 0;
    arr.sort((a, b) => a - b);
    let j = 0;
    if (arr[arr.length - 1] <= 0) {
        maxSubseqSum = arr[arr.length - 1];
    } else {
        while (j < arr.length) {
            if (arr[j] > 0) {
                maxSubseqSum += arr[j];
            }
            j++;
        }
    }
    
    
    return [maxSubarrSum, maxSubseqSum];
}