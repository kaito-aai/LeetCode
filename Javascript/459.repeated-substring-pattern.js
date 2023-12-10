/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let length = 1;
    while (length <= s.length / 2) {
        if (s.length % length !== 0) {
            length++;
            continue;
        }

        const created = s.substring(0, length)
                        .repeat(s.length / length);
        if (s === created) {
            return true;
        }
        length++;
    }
    return false;
};
// @lc code=end
