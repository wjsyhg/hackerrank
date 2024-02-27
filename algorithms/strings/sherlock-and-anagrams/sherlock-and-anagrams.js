// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

function sherlockAndAnagrams(s) {
    // Write your code here
    const map = {};
    const n = s.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const subword = s.substring(i, j);
            const sortedSubword = [...subword].sort().join("");
            map[sortedSubword] = (map[sortedSubword] || 0) + 1; 
        }
    }
    
    for (let key in map) {
        count += (map[key] * (map[key] - 1)) / 2;
    }
    
    return count;
}