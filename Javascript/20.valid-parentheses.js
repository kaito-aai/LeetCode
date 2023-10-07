/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const startParent = new Map([["(", ")"], ["{", "}"], ["[", "]"]]);
    const endParent = new Map([[")", "("], ["}", "{"], ["]", "["]]);
    const splitedS = s.split('');

    let stack = [];
    for (i = 0; i < splitedS.length; i++) {
        const pair = startParent.get(splitedS[i]);
        if (pair !== undefined) {
            stack.push(splitedS[i]);
            continue;
        }

        if (stack.length === 0) {
            return false;
        }

        const popped = stack.pop();
        if (endParent.get(splitedS[i]) !== popped) {
            return false;
        }
    }

    return stack.length === 0;
};
// @lc code=end

console.log(isValid("()"));