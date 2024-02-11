// https://www.hackerrank.com/challenges/equal-stacks/problem

function equalStacks(h1, h2, h3) {
    // Write your code here
    let totalHeight1 = 0;
    let totalHeight2 = 0;
    let totalHeight3 = 0;
    for (let i = 0; i < h1.length; i++) {
        totalHeight1 += h1[i];
    }
    for (let i = 0; i < h2.length; i++) {
        totalHeight2 += h2[i];
    }
    for (let i = 0; i < h3.length; i++) {
        totalHeight3 += h3[i];
    }
    
    let height = Math.min(totalHeight1, totalHeight2, totalHeight3);
    while (totalHeight1 !== height || totalHeight2 !== height || totalHeight3 !== height) {
        if (totalHeight1 > height) {
            totalHeight1 -= h1.shift();
        }
        
        if (totalHeight2 > height) {
            totalHeight2 -= h2.shift();
        }
        
        if (totalHeight3 > height) {
            totalHeight3 -= h3.shift();
        }
        
        height = Math.min(totalHeight1, totalHeight2, totalHeight3);
    }
    
    return height;
    
}