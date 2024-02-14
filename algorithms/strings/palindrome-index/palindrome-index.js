// https://www.hackerrank.com/challenges/palindrome-index/problem

function isPalindrome(s) {
    const arr = s.split('');
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            return false;
        }
    }
    return true;
}

function palindromeIndex(s) {
    // Write your code here
    const arr = s.split('');
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            if (isPalindrome(s.slice(0, i) + s.slice(i + 1))) {
                return i;
            }

            else if (isPalindrome(s.slice(0, arr.length - i - 1) + s.slice(arr.length - i))) {
                return arr.length - i - 1;
            }
        }
    }

    return -1;
}