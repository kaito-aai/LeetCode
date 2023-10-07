/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const index = new Map();
    for (let i = 0; i < nums.length; i++) {
        const subpart = target - nums[i];
        index.set(subpart, i);
    }
    for (let i = 0; i < nums.length; i++) {
        const key = index.get(nums[i]);

        if (i === key) {
            continue;
        }

        if (key !== undefined) {
            return [i, key];
        }
    }
};
// @lc code=end
