/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const stack = [];

    for (i = 0; i < nums.length; i++) {
        const found = stack.findIndex((v) => v === nums[i]);

        if (found < 0) {
            stack.push(nums[i]);
            continue;
        }

        stack.splice(found, 1);
    }

    return stack[0];
};
// @lc code=end

singleNumber([2,2,1])