/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const calculated = [];

    const check = (n) => {
        if (calculated.find(v => v === n)) {
            return false;
        }
        const digits = n.toString().split('').map((v) => Number(v));
        const result = digits.reduce((p, c) => p + c ** 2, 0);
        calculated.push(n);
        if (result === 1) {
            return true;
        }
        return check(result);
    }

    return check(n);
};
// @lc code=end
