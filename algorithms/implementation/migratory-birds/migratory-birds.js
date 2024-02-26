// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
    // Write your code here
    const freqArr = Array(6).fill(0);
    for (let i = 0; i < arr.length; i++) {
        freqArr[arr[i]] = (freqArr[arr[i]] || 0) + 1;
    }
    
    const maxFreq = Math.max(...freqArr);
    const idx = freqArr.indexOf(maxFreq);
    return idx;
}