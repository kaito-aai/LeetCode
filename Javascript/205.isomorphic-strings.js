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
    let sDigits = "";
    for (i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            sDigits += sMap.get(s[i]);
        }
        sDigits += i;
        sMap.set(s[i], i);
    }

    const tMap = new Map();
    let tDigits = "";
    for (i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            tDigits += tMap.get(t[i]);
        }
        tDigits += i;
        tMap.set(t[i], i);
    }

    return sDigits === tDigits;
};
// @lc code=end

