/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const array = new Array(nums.length + 1).fill(0);
    for (i = 0; i < nums.length; i++) {
        array[nums[i]]++;
    }
    const notFounds = [];
    for (i = 1; i <= array.length; i++) {
        if (array[i] === 0) {
            notFounds.push(i);
        }
    }
    return notFounds;
};
// @lc code=end
