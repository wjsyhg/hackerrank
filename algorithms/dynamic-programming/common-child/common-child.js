// https://www.hackerrank.com/challenges/common-child/problem

function commonChild(s1, s2) {
    // Write your code here
    const len = s1.length;
    const dp = Array.from({ length: len + 1}, () => Array(len + 1).fill(0));

    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[len][len];
}