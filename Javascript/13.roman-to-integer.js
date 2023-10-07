/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);

    let num = 0;
    let i = 0;
    while (i < s.length) {
        const current = map.get(s.charAt(i));
        const next = map.get(s.charAt(i + 1));

        if (next > current) {
            num += ((next / current) - 1) * current;
            i += 2;
            continue;
        }

        num += current;
        i++;
        continue;
    }
    return num;
};
// @lc code=end

