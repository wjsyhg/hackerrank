https://www.hackerrank.com/challenges/weighted-uniform-string/problem

function weightedUniformStrings(s, queries) {
    // Write your code here
    const weightedMap = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };
    let u = new Set();
    let substring = "";
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (substring === "") {
            substring += arr[i];
            u.add(weightedMap[arr[i]]);
        } else {
            if (arr[i] === substring.slice(0, 1)) {
                substring += arr[i];
                let n = substring.length;
                u.add(weightedMap[arr[i]] * n);
            } else {
                substring = arr[i];
                u.add(weightedMap[arr[i]]);
            }
        }
    }
    
    const output = [];
    for (let num of queries) {
        if (u.has(num)) {
            output.push("Yes");
        } else {
            output.push("No");
        }
    }
    
    return output;
}