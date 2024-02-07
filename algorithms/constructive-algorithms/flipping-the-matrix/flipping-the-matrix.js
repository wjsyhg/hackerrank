// https://www.hackerrank.com/challenges/flipping-the-matrix/problem

function flippingMatrix(matrix) {
    let n = matrix.length / 2;
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += Math.max(matrix[i][j], matrix[i][2 * n - 1 - j], matrix[2 * n - 1 - i][2 * n - 1 - j], matrix[2 * n - 1 - i][j]);
        }  
    }
    return result;
}