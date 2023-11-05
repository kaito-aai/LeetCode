/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    if (nums.length % 2 === 0) {
        const half1 = nums.splice(0, nums.length / 2);
        const half1Set = new Set(half1);
        if (half1Set.size === 1) {
            return half1[0];
        }
        return nums[0];
    } else {
        if (nums.length === 1) {
            return nums[0];
        }

        return nums[(nums.length - 1) / 2];
    }
};
// @lc code=end

