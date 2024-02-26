// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
    // Write your code here
    a.sort((a, b) => a - b);
    let maxLength = 1;
    let start = 0;
    let i = 0;
    while (start < a.length - 1) {
        let length = 1;
        const set = new Set();
        set.add(a[start]);
        i = start + 1;
        while (i < a.length) {
            let reminder = 0;
            if (set.has(a[i])) {
                length++;
                i++;
            } else if (reminder === 0 && a[i] - a[start] <= 1) {
                length++;
                reminder = -1;
                set.add(a[i]);
                i++;
            } else {
                break;
            }
        }
        start = i;
        maxLength = Math.max(maxLength, length);
    }
    return maxLength;
}