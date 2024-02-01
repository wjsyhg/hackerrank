// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked, player) {
    // Write your code here
    ranked = [...new Set(ranked)]; 
    let i = ranked.length - 1; 
    return player.map(score => {
        while (i >= 0 && score >= ranked[i]) {
            i--;
        }
        return i + 2; 
    });
}