// https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(s) {
    // Write your code here
    let count = 0;
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 1) {
            if (arr[i] !== "O") {
                count++;
            }
        } else {
            if (arr[i] !== "S") {
                count++;
            }
        }
    }
    return count;
}