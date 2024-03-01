// https://www.hackerrank.com/challenges/misere-nim-1/problem

function misereNim(s) {
    // Write your code here
    s.sort((a, b) => a - b);
    if (s[s.length - 1] === 1) {
        if (s.length % 2 === 0) {
            return "First";
        } else {
            return "Second";
        }
    } else {
        let xor = 0;
        for (let i = 0; i < s.length; i++) {
            xor ^= s[i];
        }
        
        if (xor === 0) {
            return "Second";
        } else {
            return "First";
        }
    }
}