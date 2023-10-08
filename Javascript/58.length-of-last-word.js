/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trimEnd();
    const w = s.lastIndexOf(" ");
    let lastWord = s;
    if (w >= 0) {
        lastWord = s.substring(w, s.length - 1);
    }
    return lastWord.length;
};
// @lc code=end

console.log(lengthOfLastWord(" a"))