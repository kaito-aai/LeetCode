/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let j = 0;
    let satisfied = 0;

    for (i = 0; i < s.length; i++) {
        if (s[i] >= g[j]) {
            satisfied++;
            j++;
        }
    }

    return satisfied;
};
// @lc code=end
