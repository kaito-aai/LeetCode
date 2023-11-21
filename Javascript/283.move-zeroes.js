/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[nonZeroIndex];
            nums[nonZeroIndex] = nums[i];
            nums[i] = temp;
            nonZeroIndex++;
        }
    }

    return nums;
};
// @lc code=end
