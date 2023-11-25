/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const set = new Set("aeiouAEIOU");
    const chars = s.split('');

    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (set.has(chars[i]) && set.has(chars[j])) {
            [chars[i], chars[j]] = [chars[j], chars[i]];
            i++;
            j--;
        } else if (set.has(chars[i])) {
            j--;
        } else {
            i++;
        }
    }

    return chars.join('');
};
// @lc code=end

reverseVowels("aA");