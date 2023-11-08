/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bits = [];
    while (n > 0) {
        const b = n % 2;
        bits.push(b);
        n = Math.trunc(n / 2);
    }

    if (bits.length < 32) {
        const len = bits.length;
        for (i = 1; i <= 32 - len; i++) {
            bits.push(0);
        }
    }

    let result = 0;
    for (i = 0; i < bits.length; i++) {
        result += bits[i] * (2 ** (bits.length - i - 1));
    }
    return result;
};
// @lc code=end
