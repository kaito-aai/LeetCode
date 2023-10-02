/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const max = 2 ** 31 - 1;
    const min = 2 ** 31 * -1;
    const parsed = parseInt(s);
    const num = isNaN(parsed) ? 0 : parsed;

    if (num > max) {
        return max;
    }
    if (num < min) {
        return min;
    }
    return num;
};
// @lc code=end
