/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const expected = nums.length * (nums.length + 1) / 2;
    const actual = nums.reduce((p, c) => p + c);
    return expected - actual;
};
// @lc code=end
