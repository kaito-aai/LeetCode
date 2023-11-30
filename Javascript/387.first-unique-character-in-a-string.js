/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const set = new Set(s);
    let firstIndex = -1;
    for (let c of set) {
        firstIndex = s.indexOf(c);

        for (i = firstIndex+1; i < s.length; i++) {
            if (s[i] === c) {
                firstIndex = -1;
                break;
            }
        }

        if (firstIndex !== -1) {
            return firstIndex;
        }
    }

    return -1;
};
// @lc code=end

firstUniqChar("loveleetcode");
