/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = 0;
    for (i = columnTitle.length - 1; i >= 0; i--) {
        num += (alphabet.indexOf(columnTitle[i]) + 1) * (26 ** (columnTitle.length - 1 - i));
    }

    return num;
};
// @lc code=end

titleToNumber("AB");