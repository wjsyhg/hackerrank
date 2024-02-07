// https://www.hackerrank.com/challenges/countingsort1/problem

function countingSort(arr) {
    // Write your code here
    const freqArr = Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) {
        freqArr[arr[i]]++;
    }
    
    return freqArr;
    
}