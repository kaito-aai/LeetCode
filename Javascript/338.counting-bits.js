/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    return Array.from({length: n + 1}, (v, k) => k.toString(2).split('').map(v => Number(v)).reduce((p,c) => p + c));
};
// @lc code=end

countBits(5);