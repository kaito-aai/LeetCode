/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const buttons = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const digitsArray = digits.split('').map(v => Number(v));
    const answer = [];

    if (digitsArray.length === 0) {
        return [];
    }

    /**
     * @param {number} digitsIndex 
     * @param {string} str 
     */
    const createCombinations = (digitsIndex, str) => {
        if (digitsIndex === digitsArray.length) {
            answer.push(str);
        } else {
            const button = digitsArray[digitsIndex];
            const chars = buttons[button];
    
            for (let i = 0; i < chars.length; i++) {
                createCombinations(digitsIndex + 1, str + chars[i]);
            }
        }
    }

    createCombinations(0, '');

    return answer;
};
// @lc code=end
