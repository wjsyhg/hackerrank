// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipher(s, k) {
    // Write your code here
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (uppercase.includes(arr[i])) {
            arr[i] = uppercase.charAt((uppercase.indexOf(arr[i]) + k) % 26);
        } else if (lowercase.includes(arr[i])) {
            arr[i] = lowercase.charAt((lowercase.indexOf(arr[i]) + k) % 26);
        } else {
            
        }
    }
    
    return String(arr.join(""));
}