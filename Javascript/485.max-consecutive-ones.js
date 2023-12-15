/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let longest = 0;
    let length = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            length++;
            continue;
        }
        longest = length > longest ? length : longest;
        length = 0;
    }
    return length > longest ? length : longest;
};
// @lc code=end
