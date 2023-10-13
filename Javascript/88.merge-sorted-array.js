/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (i = m; i < m + n; i++) {
        nums1.pop();
    }
    nums1.push(...nums2);

    return nums1.sort((a, b) => a - b);
};
// @lc code=end
