/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) {
        return false;
    }

    if (root.val === targetSum && (root.left === null && root.right === null)) {
        return true;
    }

    targetSum -= root.val;

    if (hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)) {
        return true;
    }

    return false;
};
// @lc code=end
