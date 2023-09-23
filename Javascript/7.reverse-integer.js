/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = 1;
    if (x < 0) {
        x *= -1;
        sign *= -1;
    }

    const num = Number(x.toString().split('').reverse().reduce((p, c) => p+c, ''));

    if (num > Math.pow(2, 31)) {
        return 0;
    }

    return num * sign;
};
// @lc code=end

