// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let countOfDigit = 0;
    let countOfLowercaseLetter = 0;
    let countOfUppercaseLetter = 0;
    let countOfSpecialCharacter = 0;
    for (let char of password) {
        if (char.match(/[0-9]/)) {
            countOfDigit++;
        } else if (char.match(/[a-z]/)) {
            countOfLowercaseLetter++;
        } else if (char.match(/[A-Z]/)) {
            countOfUppercaseLetter++;
        } else {
            countOfSpecialCharacter++;
        }
    }
    let minNum = 0;
    if (countOfDigit === 0) {
        minNum++;
    } 
    
    if (countOfLowercaseLetter === 0) {
        minNum++;
    }
    
    if (countOfUppercaseLetter === 0) {
        minNum++;
    }
    
    if (countOfSpecialCharacter === 0) {
        minNum++;
    }
    
    if (n + minNum < 6) {
        minNum = 6 - n;
    }
    
    return minNum;
}