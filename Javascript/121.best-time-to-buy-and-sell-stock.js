/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let bestBuy = prices[0];
    let maxProfit = 0

    for (i = 1; i < prices.length; i++) {
        const price = prices[i];
        if (bestBuy > price) {
            bestBuy = price;
            continue;
        }

        profit = price - bestBuy;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};
// @lc code=end

maxProfit([7,6,4,3,1]);
