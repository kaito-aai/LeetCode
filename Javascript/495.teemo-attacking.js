/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let total = 0;
    for (let i = 0; i < timeSeries.length - 1; i++) {
        let timeDiff = timeSeries[i + 1] - timeSeries[i];
        if (timeDiff > duration) {
            total += duration;
        } else {
            total += timeDiff;
        }
    }

    return total + duration;
};
// @lc code=end

