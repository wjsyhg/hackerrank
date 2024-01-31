// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    // Write your code here
    // 12pm - 12
    // 1pm - 13
    // 12am - 00
    // 1am - 01
    
    const char = s.charAt(8);
    if (char === "A") {
        if (s.substring(0, 2) === "12") {
            return "00" + s.substring(2, 8);
        } else {
            return s.substring(0, 8);
        }
    } else {
        if (s.substring(0, 2) === "12") {
            return s.substring(0, 8);
        } else {
            const newSubstring = parseInt(s.substring(0, 2)) + 12;
            return String(newSubstring) + s.substring(2, 8);
        }
    }
}