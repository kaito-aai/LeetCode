/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let bits = 0;
    while (n > 0) {
        const mod = n % 2;
        bits += mod;
        n = Math.trunc(n / 2);
    }

    return bits;
};
// @lc code=end
