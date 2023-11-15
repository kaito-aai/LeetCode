/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while(n > 0) {
        if (n === 1) {
            return true;
        }
        const mod = n % 2;
        if (mod !== 0) {
            return false;
        }

        n /= 2;
    }
    return false;
};
// @lc code=end

isPowerOfTwo(16);