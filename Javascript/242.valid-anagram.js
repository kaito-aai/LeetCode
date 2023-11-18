/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counter = new Array(26).fill(0);
    for (i = 0; i < s.length; i++) {
        counter[s[i].charCodeAt(0) - 97]++;
        counter[t[i].charCodeAt(0) - 97]--;
    }

    for (i = 0; i < counter.length; i++) {
        if (counter[i] !== 0) {
            return false;
        }
    }

    return true;
};
// @lc code=end

