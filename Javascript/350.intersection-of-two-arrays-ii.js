/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];
    const [base, sub] = nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];
    for (b = 0; b < base.length; b++) {
        let i = 0;
        while (i < sub.length) {
            if (base[b] === sub[i]) {
                result.push(sub.splice(i, 1));
                break;
            }

            i++;
        }
    }

    return result;
};
// @lc code=end

intersect([1,2,2,1], [2,2])