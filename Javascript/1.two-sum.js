/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    return nums.map((n1, n1Index) => {
        let n2Index = n1Index + 1;
        while (n2Index < nums.length) {
            if (n1 + nums[n2Index] > target) {
                n2Index++;
                continue;
            }

            if (n1 + nums[n2Index] === target) {
                return [n1Index, n2Index];
            }

            n2Index++;
            continue;
        }
    }).find(ns => ns !== undefined);
};
// @lc code=end
