// https://www.hackerrank.com/challenges/grid-challenge/problem

function gridChallenge(grid) {
    // Write your code here
    const arr = [];
    for (let i = 0; i < grid.length; i++) {
        arr[i] = grid[i].split("").sort();     
    }
    
    for (let c = 0; c < grid.length; c++) {
        for (let r = 0; r < grid.length - 1; r++) {
            if (arr[r][c] > arr[r + 1][c]) {
                return "NO";
            }
        }
    }
    return "YES";
    
}