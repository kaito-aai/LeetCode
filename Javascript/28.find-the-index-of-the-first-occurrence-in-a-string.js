/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let start = 0;
    let count = 0;

    while (start <= haystack.length && count < needle.length) {
        if (haystack[start] !== needle[count]) {
            start = start - count + 1;
            count = 0;
            continue;
        }

        if (count === needle.length - 1) {
            return start - count;
        }

        start++;
        count++;
    }

    return -1;
};
// @lc code=end

console.log(strStr("mississippi", "issip"))