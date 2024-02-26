// https://www.hackerrank.com/challenges/separate-the-numbers/problem

function separateNumbers(s) {
    // Write your code here
    let first = "";
    let test = false;
    for (let i = 1; i < s.length / 2 + 1; i++) {
        first = s.substring(0, i);
        let n = 1;
        let j = i;
        while (j < s.length) {
            if (s.substring(j).startsWith(String(BigInt(first) + BigInt(n)))) {
                j += String(BigInt(first) + BigInt(n)).length;
                n++;
                test = true;
            } else {
                test = false;
                break;
            }
        }
        if (test && j === s.length) {
            break;
        }
        
    }
    if (test) {
        console.log("YES " + String(first));
    } else {
        console.log("NO");
    }
     
}