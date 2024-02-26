// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    // Write your code here
    let number = 0;
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);
    
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
        let count = 0;
        for (let x = 0; x < a.length; x++) {
            if (i % a[x] === 0) {
                count++;
            }
        }
        
        for (let y = 0; y < b.length; y++) {
            if (b[y] % i === 0) {
                count++;
            }
        }
        
        if (count === a.length + b.length) {
            number++;       
        }    
        
    }
    return number;
}
