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
    const arr = new Array(26).fill(0);
    const acode = 'a'.charCodeAt(0);
    for (i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt(0) - acode]--;
        arr[t[i].charCodeAt(0) - acode]++;
    }
    arr[t[t.length - 1].charCodeAt(0) - acode]++;

    return String.fromCharCode([arr.findIndex(v => v === 1) + acode]);
};
// @lc code=end
