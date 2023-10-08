/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        if (nums[start] === target) {
            return start;
        }

        if (nums[end] === target) {
            return end;
        }

        start++;
        end--;
    }

    let tobe = 0;
    for (i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < target && tobe < i + 1) {
            tobe = i + 1;
        }
    }

    return tobe;
};
// @lc code=end

console.log(searchInsert([1,3,5,6], 7))