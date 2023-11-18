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
    const a = new Array(nums.length + 1).fill(false);

    for (i = 0; i < nums.length; i++) {
        a[nums[i]] = true;
    }

    return a.findIndex(v => !v);
};
// @lc code=end

