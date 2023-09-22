/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    /**
     * @param {string} i
     * @param {string} j
     * @return {boolean}
     */
    const check = (i, j) => {
        let left = i;
        let right = j - 1;
        while (left < right) {
            if (s[left] != s[right]) {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }

    for (let length = s.length; length >= 1; length--) {
        for (let start = 0; s.length - length >= start; start++) {
            if (!check(start, start+length)) {
                continue;
            }

            return s.substring(start, start+length);
        }
    }
};

// @lc code=end

console.log(longestPalindrome("babad"))
