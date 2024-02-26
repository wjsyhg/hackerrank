// https://www.hackerrank.com/challenges/anagram/problem

function anagram(s) {
    // Write your code here
    if (s.length % 2 !== 0) {
        return -1;
    }
    const substring1 = s.slice(0, s.length / 2);
    const substring2 = s.slice(s.length / 2);
    const countingArr1 = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    };
    
    const countingArr2 = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    };
    
    const arr1 = substring1.split("");
    const arr2 = substring2.split("");
    
    for (let i = 0; i < s.length / 2; i++) {
        countingArr1[arr1[i]]++;
        countingArr2[arr2[i]]++;
    }
    
    let number = 0;
    for (let key in countingArr1) {
        number += Math.abs(countingArr1[key] - countingArr2[key]);
    }
    
    return number/2;
}