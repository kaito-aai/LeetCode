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
    let index = 0;
    const zeroStack = [];
    while (index < nums.length) {
        if (nums[index] === 0) {
            zeroStack.push(nums.splice(index, 1));
            continue;
        }
        index++;
    }
    
    while (zeroStack.length > 0) {
        nums.push(zeroStack.shift());
    }

    return nums;
};
// @lc code=end

