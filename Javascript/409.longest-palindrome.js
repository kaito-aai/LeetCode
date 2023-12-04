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
    let palindrome = 0;

    for (i = 0; i < s.length; i++) {
        const abcIndex = s[i].charCodeAt(0) - charCodeA;
        abc[abcIndex]++;
        if (abc[abcIndex] % 2 === 0) {
            palindrome += 2;
        }
    }

    return palindrome < s.length ? palindrome + 1 : palindrome;
};
// @lc code=end
