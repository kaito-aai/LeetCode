/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const found = new Map();
    for (i = 0; i < nums.length; i++) {
        if (!found.has(nums[i])) {
            found.set(nums[i], i);
            continue;
        }

        if (Math.abs(found.get(nums[i]) - i) <= k) {
            return true;
        }

        found.set(nums[i], i);
    }
    return false;
};
// @lc code=end

containsNearbyDuplicate([1,0,1,1], 1)