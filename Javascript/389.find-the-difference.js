/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let codeSum = 0;
    for (i = 0; i < s.length; i++) {
        codeSum -= s[i].charCodeAt(0);
        codeSum += t[i].charCodeAt(0);
    }
    codeSum += t[t.length - 1].charCodeAt(0);

    return String.fromCharCode(codeSum);
};
// @lc code=end
