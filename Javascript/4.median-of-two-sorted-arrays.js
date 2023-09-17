/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);

    if (nums1.length % 2 === 0) {
        const firstIndex = nums1.length / 2 - 1;
        const secondIndex = nums1.length / 2;
        return (nums1[firstIndex] + nums1[secondIndex]) / 2
    } else {
        const index = (nums1.length - 1) / 2;
        return nums1[index];
    }
};
// @lc code=end

