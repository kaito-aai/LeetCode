/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bit = num.toString(2);
    let b = "";
    for (i = 0; i < bit.length; i++) {
        if (bit[i] === "0") {
            b += "1";
            continue;
        }

       b += "0";
    }

    return parseInt(b, 2);
};
// @lc code=end

findComplement(5)