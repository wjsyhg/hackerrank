// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
    // Write your code here
    let arr = s.split("");
    while (arr) {
        let i = 1;
        while (i < arr.length) {
            if (arr[i] === arr[i - 1]) {
                if (arr.length === 2) {
                    return "Empty String";
                } else {
                    arr = arr.slice(0, i - 1).concat(arr.slice(i + 1));
                    i--; 
                }
                
            } else {
                i++;       
            }
            
        }
        
        return arr.join("");
    }
}