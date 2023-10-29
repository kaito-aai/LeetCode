/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const lowers = s.toLowerCase();
    let trimed = "";
    for (i = 0; i < lowers.length; i++) {
        const code = lowers[i].charCodeAt(0);
        if ((code < 48 || 57 < code) && (code < 97 || 122 < code)) {
            continue;
        }
        trimed += lowers[i];
    }

    if (trimed.length % 2 === 0) {
        const halfCount = trimed.length / 2;
        const firstHalf = trimed.slice(0, halfCount);
        const secondeHalf = trimed.slice(halfCount);

        return firstHalf === secondeHalf.split('').reverse().join('');
    }

    if (trimed.length === 1) {
        return true;
    }

    const half = (trimed.length - 1) / 2;
    const firstHalf = trimed.slice(0, half);
    const secondeHalf = trimed.slice(half+1);

    return firstHalf === secondeHalf.split('').reverse().join('');
};
// @lc code=end
