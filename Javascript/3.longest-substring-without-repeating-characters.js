/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let accum = [""];
    let str = ""

    s.split('').forEach((c, i, arr) => {
        if (str.includes(c)) {
            accum.push(str);
            str = str.substring(str.indexOf(c) + 1) + c;
            return;
        }

        str += c;

        if (arr.length === i + 1) {
            accum.push(str);
            return;
        }
    })

    return accum.sort((a, b) => b.length - a.length)[0].length;
};
// @lc code=end
