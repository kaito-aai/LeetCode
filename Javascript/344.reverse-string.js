/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let stack = "";
    for (i = 0; i < (s.length - 1) / 2; i++) {
        stack = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 -i] = stack;
    }
};
// @lc code=end
