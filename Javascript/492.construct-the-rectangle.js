/*
 * @lc app=leetcode id=492 lang=javascript
 *
 * [492] Construct the Rectangle
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let sqrt = Math.trunc(Math.sqrt(area));

    while (area % sqrt !== 0) {
        sqrt--;
    }

    return [area / sqrt, sqrt];
};
// @lc code=end

constructRectangle(37);
