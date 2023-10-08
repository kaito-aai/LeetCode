/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const addedD = [];
    let stack = 1;
    digits.reverse().forEach((v, i) => {
        let added = v + stack;
        stack = 0;
        if (added >= 10) {
            stack = 1;
            added -= 10;
        }
        addedD.push(added);
    });
    if (stack > 0) {
        addedD.push(stack);
    }
    return addedD.reverse();
};
// @lc code=end

