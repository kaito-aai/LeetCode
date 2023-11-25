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
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const [smallSet, largeSet] = set1.size > set2.size ? [set2, set1] : [set1, set2];
    const result = [];

    smallSet.forEach((v) => {
        if (largeSet.has(v)) {
            result.push(v);
        }
    })

    return result;
};
// @lc code=end
intersection([1,2,2,1], [2,2]);