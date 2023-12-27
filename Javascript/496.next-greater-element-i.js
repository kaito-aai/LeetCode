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
    const map = {};

    for (let l = 0; l < nums2.length; l++) {
        let r = l + 1;
        while (r <= nums2.length - 1 && nums2[l] > nums2[r]) {
            r++;
        }

        map[nums2[l]] = r < nums2.length ? nums2[r] : -1
    }

    for (let i = 0; i < nums1.length; i++) {
        ans.push(map[nums1[i]])
    }

    return ans;
};
// @lc code=end
