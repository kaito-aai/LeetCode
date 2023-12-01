/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let si = 0;
    let ti = 0;
    while (si < s.length && ti < t.length) {
        if (s[si] === t[ti]) {
            si++;
            ti++;
            continue;
        }

        ti++;
    }
    return si === s.length;
};
// @lc code=end

