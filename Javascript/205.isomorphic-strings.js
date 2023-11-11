/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const sMap = new Map();
    const tMap = new Map();
    for (i = 0; i < s.length; i++) {
        const st = sMap.get(s[i]);
        const ts = tMap.get(t[i]);
        if (st === undefined && ts === undefined) {
            sMap.set(s[i], t[i]);
            tMap.set(t[i], s[i]);
            continue;
        }

        if (st === t[i] && ts === s[i]) {
            continue;
        }

        return false;
    }

    return true;
};
// @lc code=end

