// https://www.hackerrank.com/challenges/recursive-digit-sum/problem

function superDigit(n, k) {
    if (n.length === 1 && k === 1) {
        return n;
    } else {
        let sum = 0;
        const arr = n.split('');
        for (let i = 0; i < n.length; i++) {
            sum += parseInt(arr[i]);
        }
        sum *= k;
        return superDigit(sum.toString(), 1);
    }
}