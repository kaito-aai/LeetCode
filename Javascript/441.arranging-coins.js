/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let c = 1;
    let row = 0;
    while (n >= c) {
        n -= c;
        row++;
        c++;
    }

    return row;
};
// @lc code=end
