/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let val = x ^ y;
    let count = 0;

    while (val != 0) {
        if (val & 1) {
            count++;
        }
        val = val >> 1;
    }
    return count;
};
// @lc code=end

hammingDistance(3, 1);