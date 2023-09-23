/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let rest = s.length;
    let numCols = 0;
    while (true) {
        rest -= numRows;
        numCols++;

        if (rest <= 0) {
            break;
        }

        for (let i = 1; i <= numRows - 2; i ++) {
            rest -= 1;
            numCols++;

            if (rest <= 0) {
                break;
            }
        }
    }

    const array = Array.from({length: numRows}, (v, k) => Array.from({length: numCols}, (v, k) => ''));

    let colCount = 0;

    while (s.length > 0) {
        for (let i = 0; i < numRows; i++) {
            const c = s.slice(0, 1);
            array[i][colCount] = c;
            s = s.slice(1);
        }

        colCount++;

        for (let i = numRows - 2; i > 0; i--) {
            const c = s.slice(0, 1);
            array[i][colCount] = c;
            s = s.slice(1);
            colCount++;
        }
     }

     return array.flatMap((v) => v).filter((v) => {
        if (v !== '') {
            return v;
        }
     }).reduce((p,c) => p+c, '');

    //  return array;
};
// @lc code=end

console.log(convert("PAYPALISHIRING", 4))