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
    const calculated = new Set();

    while (!calculated.has(n)) {
        calculated.add(n);
        n = n.toString().split('').map((v) => Number(v)).reduce((p, c) => p + c ** 2, 0);
        if (n === 1) {
            return true;
        }
    }
    return false;
};
// @lc code=end
