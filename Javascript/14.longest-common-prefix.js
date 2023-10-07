/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }
    const prefixes = [];

    const prefixTarget = strs.sort((a, b) => b.length - a.length).pop();
    for (i = 1; i < prefixTarget.length + 1; i++) {
        prefixes.push(prefixTarget.substring(0, i));
    }

    let prefix = "";
    for (i = 1; i <= prefixes.length; i++) {
        if (strs.every(v => v.substring(0, i) === prefixes[i - 1])) {
            prefix = prefixes[i - 1];
        }
    }

    return prefix;
};
// @lc code=end

console.log(longestCommonPrefix(["ab", "a"]));
