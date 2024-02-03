https://www.hackerrank.com/challenges/lonely-integer/problem

function lonelyinteger(a) {
    // Write your code here
    const set = new Set();
    for (let i = 0; i < a.length; i++) {
        if (set.has(a[i])) {
            set.delete(a[i]);
        } else {
            set.add(a[i]);
        }
    }
    
    for (let value of set) {
        return value;
    }
    
}