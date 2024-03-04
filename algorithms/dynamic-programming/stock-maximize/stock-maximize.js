// https://www.hackerrank.com/challenges/stockmax/problem

function stockmax(prices) {
    // Write your code here
    let profit = 0;
    let maxPrice = prices[prices.length - 1];
    for (let i = prices.length - 2; i >= 0; i--) {
        if (prices[i] < maxPrice) {
            profit += maxPrice - prices[i];
        } else if (prices[i] > maxPrice) {
            maxPrice = prices[i];
        }
    }
    return profit;
}