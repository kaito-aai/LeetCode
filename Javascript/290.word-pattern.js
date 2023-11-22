/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    const map = new Map();

    if (words.length !== pattern.length) {
        return false;
    }

    if (new Set(words).size !== new Set(pattern).size) {
        return false;
    }

    let actualWords = "";
    for (i = 0; i < words.length; i++) {
        const word = map.get(pattern[i]);
        if (word === undefined) {
            map.set(pattern[i], words[i]);
            actualWords += `${words[i]} `;
            continue;
        }

        actualWords += `${word} `;
    }

    return s === actualWords.trimEnd();
};
// @lc code=end

wordPattern("abba", "dog cat cat dog");
