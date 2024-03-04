// https://www.hackerrank.com/challenges/pylons/problem

function pylons(k, arr) {
    let count = 0;
    let start = 0;
    while (start < arr.length) {
        let j = Math.min(start + k - 1, arr.length - 1);
        while (arr[j] === 0 && j >= Math.max(0, start - k + 1)) {
            j--;
        }
        if (j >= Math.max(0, start - k + 1)) {
            count++;
            start = j + k;
        } else {
            return -1;
        }
    }
    return count;
}