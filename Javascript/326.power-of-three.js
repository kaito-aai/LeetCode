/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        n /= 3;
        if (!Number.isInteger(n)) {
            return false;
        }
    }
    return true;
};
// @lc code=end
