/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    for (i = 0; i < s.length; i++) {
        if (s[i] === '-') {
            s = s.substring(0, i) + s.substring(i + 1);
            i--;
        }
    }

    let end = s.length;
    let ans = "";
    while (end > 0) {
        if (end - k < 0) {
            ans = s.substring(0, end) + "-" + ans;
            break;
        }
        ans = s.substring(end - k, end) + "-" + ans;
        end -= k;
    }
    return ans.substring(0, ans.length - 1).toUpperCase();
};
// @lc code=end

licenseKeyFormatting("2-5g-3-J", 2);