/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineArr = magazine.split('');

    for (i = 0; i < ransomNote.length; i++) {
        const found = magazineArr.findIndex((v) => v === ransomNote[i]);
        if (found === -1) {
            return false;
        }

        magazineArr.splice(found, 1);
    }

    return true;
};
// @lc code=end

canConstruct("a", "b");