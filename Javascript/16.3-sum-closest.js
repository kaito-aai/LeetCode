/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let candidate = nums[0] + nums[1] + nums[2];
    for (i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (target === sum) {
                return sum;
            }

            if (Math.abs(target - sum) < Math.abs(target - candidate)) {
                candidate = sum;
            }

            if (sum > target) {
                k--;
            } else {
                j++;
            }
        }
    }
    return candidate;
};
// @lc code=end

