/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const set = new Set(nums);
    nums.splice(0, nums.length);
    set.forEach(v => {
        nums.push(v);
    });

    return set.size;
};
// @lc code=end
