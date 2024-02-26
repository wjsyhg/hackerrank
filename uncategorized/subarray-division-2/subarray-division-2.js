// https://www.hackerrank.com/challenges/three-month-preparation-kit-the-birthday-bar/problem

function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    let number = 0;
    for (let i = 0; i < m; i++) {
        number += s[i];
    }
    
    if (number === d) {
        count++;
    }
    
    for (let i = m; i < s.length; i++) {
        number -= s[i - m];
        number += s[i];
        if (number === d) {
        count++;
        }
    }
    
    return count;
}