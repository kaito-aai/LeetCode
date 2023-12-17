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
    const parentheses = [];
    /**
     * 
     * @param {string} str 
     * @param {number} open 
     * @param {number} close 
     */
    const insert = (str, open, close) => {
        if (open > close) {
            return;
        }
        if (open === 0 && close === 0) {
            parentheses.push(str);
            return;
        }
        if (open > 0) {
            insert(`${str}(`, open - 1, close);
        }
        if (close > 0) {
            insert(`${str})`, open, close - 1);
        }
    }

    insert('', n, n);
    return parentheses;
};
// @lc code=end
generateParenthesis(3);
