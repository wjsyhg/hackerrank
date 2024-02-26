// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (v1 <= v2 || (x2 - x1) % (v2 - v1) !== 0) {
        return "NO";
    } else {
        return "YES";
    }
}