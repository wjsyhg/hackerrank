// https://www.hackerrank.com/challenges/magic-square-forming/problem

function formingMagicSquare(s) {
    // Write your code here
    const magicSquares = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 7, 6, 9, 5, 1, 4, 3, 8]
  ];
  
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i][0]);
        arr.push(s[i][1]);
        arr.push(s[i][2]);
    }
    
    let minCost = Infinity;
    for (let i = 0; i < 8; i++) {
        let currCost = 0;
        for (let j = 0; j < 9; j++) {
            currCost += Math.abs(magicSquares[i][j] - arr[j]);
        }
        minCost = Math.min(minCost, currCost);
    }
    
    return minCost;
}