// https://www.hackerrank.com/challenges/lilys-homework/problem

function lilysHomework(arr) {
    // Write your code here
    const sorted = [...arr].sort((a, b) => a - b);
    const sortedReverse = [...sorted].reverse();

    const countSwaps = (arr, sorted) => {
        const comparedArr = [...arr];
        let swaps = 0;
        let indexMap = new Map(arr.map((val, i) => [val, i]));
        for (let i = 0; i < comparedArr.length; i++) {
            if (sorted[i] !== comparedArr[i]) {
                swaps++;
                let idx = indexMap.get(sorted[i]);
                indexMap.set(comparedArr[i], idx);
                indexMap.set(sorted[i], i);
                [comparedArr[i], comparedArr[idx]] = [comparedArr[idx], comparedArr[i]];
            }
        }
        return swaps;
    };

    return Math.min(countSwaps(arr, sorted), countSwaps(arr, sortedReverse));
}