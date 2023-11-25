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
    const set = new Set("aeiou");

    const stack = [];
    for (i = 0; i < s.length; i++) {
        if (set.has(s[i].toLowerCase())) {
            stack.push(i);
        }
    }

    const chars = s.split('');
    for (i = 0; i < stack.length / 2; i++) {
        [chars[stack[i]], chars[stack[stack.length - i - 1]]] = [chars[stack[stack.length - i - 1]], chars[stack[i]]];
    }

    return chars.join('');
};
// @lc code=end

reverseVowels("aA");