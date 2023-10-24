/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const rows = [];
    for (i = 0; i < numRows; i++) {
        const arr = Array.from({length: i + 1}, (v,k) => undefined);
        arr[0] = 1;
        arr[i] = 1;
        for (a = 0 + 1; a < i; a++) {
            arr[a] = rows[i - 1][a - 1] + rows[i - 1][a]; 
        }
        rows.push(arr)
    }

    return rows;
};
// @lc code=end

console.log(generate(5));