/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 0;

    while (i**2 <= x) {
        i++;
    }

    while (i**2 > x) {
        i--;
    }

    return i;
};
// @lc code=end
