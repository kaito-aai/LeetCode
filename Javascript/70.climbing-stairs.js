/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let step2Count = 0;
    let space = n;
    let step = 1;
    while (space * 2 >= n) {
        step2Count++;
        space = n - step2Count;
        const spaceArray = Array.from({length: space}, (v, k) => k + 1).reverse();
        const step2CountArray = Array.from({length: step2Count}, (v,k) => k + 1);
        if (step2Count < spaceArray.length) {
            const c = spaceArray.slice(0, step2Count).reduce((p, c) => p * c) / step2CountArray.reduce((p,c) => p * c);
            step += c;
        }

        if (step2Count * 2 === n) {
            step++
            return step;
        }
    }

    return step;
};
// @lc code=end
