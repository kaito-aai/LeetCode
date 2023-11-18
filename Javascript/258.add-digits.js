/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num > 9) {
        num = num.toString().split('').map(v => Number(v)).reduce((p,c) => p + c);
    }
    return num;
};
// @lc code=end

