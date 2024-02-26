// https://www.hackerrank.com/challenges/array-left-rotation/problem

function rotateLeft(d, arr) {
    // Write your code here
    if (d === arr.length) {
        return arr;
    }
 
    const rotatedArr = Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        if (i + d <= arr.length - 1) {
            rotatedArr[i] = arr[i + d];
        } else {
            rotatedArr[i] = arr[i + d - arr.length];
        }
    }
    return rotatedArr;
}