/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0;
    let segument = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            count++;
            continue;
        }
        
        if (count > 0) {
            count = 0;
            segument++;
        }
    }

    if (count > 0) {
        segument++;
    }

    return segument;
};
// @lc code=end
