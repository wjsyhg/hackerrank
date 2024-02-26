// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps, path) {
    // Write your code here
    let count = 0;
    let currLevel = 0;
    const arr = path.split("");
    for (let i = 0; i < steps; i++) {
        let step = 0;
        if (arr[i] === "U") {
            step += 1;
        } else {
            step += -1;
        }
        let afterStep = currLevel + step;
        if (currLevel === 0 && afterStep < 0) {
            count++;
        }
        currLevel = afterStep;
    }
    
    return count;
}