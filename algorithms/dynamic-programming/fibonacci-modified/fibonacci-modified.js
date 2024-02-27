// https://www.hackerrank.com/challenges/fibonacci-modified/problem

function fibonacciModified(t1, t2, n) {
    // Write your code here
    let prev1 = BigInt(t1);
    let prev2 = BigInt(t2);
    let res = BigInt(0);
    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2 * prev2;
        res = curr;
        let temp = prev2;
        prev2 = curr;
        prev1 = temp;
    }
    return res;
}