// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(socre) {
    let minCount = 0;
    let maxCount = 0;
    let minScore = scores[0];
    let maxScore = scores[0];
    const n = scores.length;

    for (let i = 1; i < n; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxCount++;
        }

        if (scores[i] < minScore) {
            minScore = scores[i];
            minCount++;
        }
    }

    return [maxCount, minCount];
}