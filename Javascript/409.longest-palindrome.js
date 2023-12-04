/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const abc = new Array(58).fill(0);
    const charCodeA = 'A'.charCodeAt(0);

    for (i = 0; i < s.length; i++) {
        abc[s[i].charCodeAt(0) - charCodeA]++;
    }

    let palindrome = 0;
    let odd = 0;
    for (i = 0; i < abc.length; i++) {
        if (abc[i] === 0) {
            continue;
        }
        if (abc[i] % 2 === 0) {
            palindrome += abc[i];
            continue;
        }
        palindrome += abc[i] - 1;
        odd = 1;
    }
    return palindrome + odd;
};
// @lc code=end
