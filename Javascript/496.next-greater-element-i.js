/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        const pos = nums2.findIndex(v => v === nums1[i]);
        const sliced = nums2.slice(pos+1);
        const found = sliced.find(v => v > nums2[pos]);
        if (found) {
            ans.push(found);
        } else {
            ans.push(-1);
        }
    }
    return ans;
};
// @lc code=end
