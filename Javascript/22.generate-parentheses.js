/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const patterns = [];
    /**
     * 
     * @param {number} count 
     * @param {string} parentheses 
     */
    const insert = (count, parentheses) => {
        if (count === n) {
            patterns.push(parentheses);
            return;
        } else {
            for (let i = 0; i < parentheses.length; i++) {
                insert(count+1, parentheses.slice(0, i) + "()" + parentheses.slice(i));
            }
        }
    }

    insert(1, "()");
    return Array.from(new Set(patterns));
};
// @lc code=end
generateParenthesis(3);
