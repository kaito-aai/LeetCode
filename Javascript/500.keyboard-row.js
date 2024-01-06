/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const output = [];
    const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let wordsIndex = 0;
    while (wordsIndex < words.length) {
        for (let r = 0; r < rows.length; r++) {
            if (Array.from(words[wordsIndex]).every(v => rows[r].includes(v.toLowerCase()))) {
                output.push(words[wordsIndex]);
                break;
            }
        }

        wordsIndex++;
    }

    return output;
};
// @lc code=end

findWords(["Hello","Alaska","Dad","Peace"]);