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
    let zeroStartIndex = nums.length;
    while (zeroStartIndex >= index) {
        if (nums[index] !== 0) {
            index++;
            continue;
        }

        zeroStartIndex--;
        const zero = nums.splice(index, 1);
        nums.push(zero);
    }

    return nums;
};
// @lc code=end
