// https://www.hackerrank.com/challenges/icecream-parlor/problem

function icecreamParlor(m, arr) {
    // Write your code here
    const cost = new Set(arr);
    let diff;
    
    for (let i = 0; i < arr.length; i++) {
        diff = m - arr[i];
        if (cost.has(diff)) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === diff) {
                    const solution = [];
                    solution.push(i + 1);
                    solution.push(j + 1);
                    return solution;
                }
            }
        }
    }
}   