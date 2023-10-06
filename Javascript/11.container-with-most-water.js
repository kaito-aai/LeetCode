/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = height[left] > height[right] ? height[right] : height[left];
        const w = right - left;
        const calculated = h * w;
        if (calculated > max) {
            max = calculated;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};
// @lc code=end

console.log(maxArea([2,3,4,5,18,17,6]))