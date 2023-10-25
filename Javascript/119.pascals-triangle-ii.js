/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const rows = [];
    for (i = 0; i <= rowIndex; i++) {
        const row = Array.from({length: i + 1}, (v,k) => undefined);
        row[0] = 1;
        row[i] = 1;
        for (let a = 1; a < i; a++) {
            row[a] = rows[i - 1][a - 1] + rows[i - 1][a];
        }
        rows.push(row);
    }
    return rows[rowIndex];
};
// @lc code=end
