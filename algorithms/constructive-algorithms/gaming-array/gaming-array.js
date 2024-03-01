// https://www.hackerrank.com/challenges/an-interesting-game-1/problem

function gamingArray(arr) {
    // Write your code here
    let moves = 0;
    let maxSoFar = -1;
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > maxSoFar) {
           moves++;
           maxSoFar = arr[i];
       } 
    }
    
    if (moves % 2 !== 0) {
        return "BOB";
    } else {
        return "ANDY";
    }
}