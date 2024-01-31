// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let minimum = 0;
    let maximum = 0;
    
    for (let i = 0; i < 4; i++) {
        minimum += arr[i];
    }
    
    for (let i = 4; i > 0; i--) {
        maximum += arr[i];
    }
    
    console.log(minimum + " " + maximum);
}