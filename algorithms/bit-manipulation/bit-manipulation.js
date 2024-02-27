// https://www.hackerrank.com/challenges/sansa-and-xor/problem

function sansaXor(arr) {
    // Write your code here
    const n = arr.length;
    if (n % 2 === 0) {
        return 0;
    } else {
        let res = 0;
        for (let i = 0; i < n; i += 2) {
            res ^= arr[i];
        }
        return res;
    }
}