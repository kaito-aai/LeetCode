/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let stack = "0";
    let base = a.length > b.length ? a : b;
    let add = a.length > b.length ? b : a;
    const reversedAdd = add.split('').reverse();

    let ans = [];
    base.split('').reverse().forEach((v, i) => {
        let a = [stack];
        if (i <= reversedAdd.length - 1) {
            a.push(reversedAdd[i]);
        }
        a.push(v);

        let count1 = 0;
        a.map((v) => {
            if (v === "1") {
                count1++;
            }
        })

        console.log(count1)

        if (count1 === 0) {
            ans.push("0");
            stack = "0";
            return;
        }

        if (count1 === 1) {
            ans.push("1");
            stack = "0";
            return;
        }

        if (count1 === 2) {
            ans.push("0")
            stack = "1";
            return;
        }

        if (count1 === 3) {
            ans.push("1");
            stack = "1";
            return;
        }
    });
    if (stack === "1") {
        ans.push(stack);
    }

    return ans.reduceRight((p, c) => p + c);
};
// @lc code=end

console.log(addBinary("1010", "1011"));