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
    let L = area - 1;
    let W = 1;
    let ans = [area, 1];
    while (L >= W) {
        if (area % L !== 0) {
            L--;
            continue;
        }

        W = area / L;

        if (Math.abs(ans[0] - ans[1]) > Math.abs(L - W)) {
            ans = [L, W];
        }
        L--;
    }

    return ans;
};
// @lc code=end

constructRectangle(37);
