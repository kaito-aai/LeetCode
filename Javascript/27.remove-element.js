/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] !== val) {
            i++;
            continue;
        }

        nums.splice(i, 1);
    }

    return nums.length;
};
// @lc code=end

