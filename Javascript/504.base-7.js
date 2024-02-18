/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) {
        return "0"
    }

    let result = "";
    const sign = Math.sign(num);
    num *= sign;

    while (num > 0) {
        result = `${num % 7}${result}`
        num = Math.floor(num / 7);
    }
    return sign >= 0 ? `${result}` : `-${result}`;
};
// @lc code=end
