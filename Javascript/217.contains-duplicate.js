/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const found = new Set();
    for (i = 0; i < nums.length; i++) {
        if (found.has(nums[i])) {
            return true;
        }

        found.add(nums[i]);
    }

    return false;
};
// @lc code=end

