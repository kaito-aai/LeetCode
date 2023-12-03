/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let ans = "";
    const digits = "0123456789abcdef";
    if (num === 0) {
        return "0";
    }
    if (Math.sign(num) === -1) {
        num = 16 ** 8 + num;
    }
    while (num > 0) {
        ans += (digits[num % 16]);
        num = Math.trunc(num / 16);
    }

    return ans.split('').reverse().join('');
};
// @lc code=end
