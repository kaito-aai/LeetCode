/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];

    let stack = [];
    let s = [];
    while (nums.length > 0) {
        if (s.length === 0) {
            s.push(nums.shift());
            continue;
        }
        if (s[s.length - 1] + 1 === nums[0]) {
            s.push(nums.shift());
            continue;
        }

        stack.push(s);
        s = [];
    }

    if (s.length > 0) {
        stack.push(s);
    }

    for (i = 0; i < stack.length; i++) {
        if (stack[i].length === 1) {
            result.push(`${stack[i][0]}`);
        } else {
            result.push(`${stack[i][0]}->${stack[i][stack[i].length - 1]}`);
        }
    }

    return result;
};
// @lc code=end

summaryRanges([0,1,2,4,5,7])