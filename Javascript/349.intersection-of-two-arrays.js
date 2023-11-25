/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const checked = new Set();
    const result = [];
    for (i = 0; i < nums1.length; i++) {
        for (j = 0; j < nums2.length; j++) {
            if (checked.has(nums1[i])) {
                break;
            }
            if (nums1[i] === nums2[j]) {
                result.push(nums1[i]);
                checked.add(nums1[i]);
                break;
            }
        }
        checked.add(nums1[i]);
    }

    return result;
};
// @lc code=end
