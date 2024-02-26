// https://www.hackerrank.com/challenges/missing-numbers/problem

function missingNumbers(arr, brr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    brr.sort((a, b) => a - b);
    const set = new Set();
    const res = [];
    while (arr.length > 0) {
        if (arr[0] === brr[0]) {
                arr.shift();
                brr.shift();
            } else {
                const missingNumber = brr.shift();
                if (set.has(missingNumber)) {
                    
                } else {
                    set.add(missingNumber);
                    res.push(missingNumber);
                }
        }
    }
    
    while (brr.length > 0) {
        const missingNumber = brr.shift();
        if (set.has(missingNumber)) {
            
        }else {
            set.add(missingNumber);
            res.push(missingNumber);
        }
    }
    
    
    return res;
    
}