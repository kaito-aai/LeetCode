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

    const counter = Array.from({length: 26}, (v, k) => 0);
    const aCode = 'a'.charCodeAt(0);
    for (i = 0; i < s.length; i++) {
        counter[s[i].charCodeAt(0) - aCode]++;
        counter[t[i].charCodeAt(0) - aCode]--;
    }

    for (i = 0; i < counter.length; i++) {
        if (counter[i] !== 0) {
            return false;
        }
    }

    return true;
};
// @lc code=end

