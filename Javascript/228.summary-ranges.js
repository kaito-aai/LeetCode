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
    while (nums.length > 0) {
        const n = nums.shift();
        if (stack.length === 0) {
            stack.push(n);
            continue;
        }
        if (stack[stack.length - 1] + 1 === n) {
            stack.push(n);
            continue;
        }

        if (stack.length === 1) {
            result.push(`${stack[0]}`);
        } else {
            result.push(`${stack[0]}->${stack[stack.length - 1]}`);
        }

        stack = [n];
    }

    if (stack.length === 0) {
        return result;
    }

    if (stack.length === 1) {
        result.push(`${stack[0]}`);
    } else {
        result.push(`${stack[0]}->${stack[stack.length - 1]}`);
    }

    return result;
};
// @lc code=end

summaryRanges([0,2,3,4,6,8,9]);
