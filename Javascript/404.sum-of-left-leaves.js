/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0;
    }

    if (!root.left) {
        return sumOfLeftLeaves(root.right)
    }

    if (!root.left.left && !root.left.right) {
        return sumOfLeftLeaves(root.right) + sumOfLeftLeaves(root.left) + root.left.val;
    }

    return sumOfLeftLeaves(root.right) + sumOfLeftLeaves(root.left);
};
// @lc code=end

sumOfLeftLeaves(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3)));