/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(w =>
        /^[qwertyuiop]*$/i.test(w) ||
        /^[asdfghjkl]*$/i.test(w) ||
        /^[zxcvbnm]*$/i.test(w));
};
// @lc code=end

findWords(["Hello","Alaska","Dad","Peace"]);