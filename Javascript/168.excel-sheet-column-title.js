/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    while (columnNumber > 0) {
        columnNumber--;
        result = alphabet[columnNumber % alphabet.length] + result;
        columnNumber = Math.trunc(columnNumber / alphabet.length);
    }

    return result;
};

// @lc code=end
