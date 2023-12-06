/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => b - a);

    let count = 1;
    let previous = nums[0];
    for (i = 1; i < nums.length; i++) {
        if (nums[i] !== previous) {
            count++;
            previous = nums[i];
        }

        if (count === 3) {
            return nums[i];
        }
    }

    return nums[0];
};
// @lc code=end

thirdMax([1,2]);
