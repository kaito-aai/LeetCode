/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map = new Map([[1, "I"], [5, "V"], [10, "X"], [50, "L"], [100, "C"], [500, "D"], [1000, "M"]]);
    const digits = num.toString().split('').map(Number).reverse();

    let romanDigits = "";
    digits.forEach((v, i) => {
        if (v === 0) {
            return;
        }

        const di = Math.pow(10, i);

        if (v === 5) {
            const r = map.get(di * 5);
            romanDigits = `${r}${romanDigits}`;
            return;
        }

        if (v === 4) {
            const r = map.get(di * 5);
            romanDigits = `${map.get(di) + r}${romanDigits}`;
            return;
        }

        if (v === 9) {
            const r = map.get(di * 10);
            romanDigits = `${map.get(di) + r}${romanDigits}`;
            return;
        }

        if (v > 5) {
            const r = map.get(di * 5);
            const p = map.get(di);
            romanDigits = `${r}${p.repeat(v % 5)}${romanDigits}`;
            return;
        }

        const r = map.get(di);
        romanDigits = `${r.repeat(v)}${romanDigits}`;
        return;
    });

    return romanDigits;
};
// @lc code=end

console.log(intToRoman(3))