/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;

    const queue = [root];

    let left = null;

    while (queue.length > 0) {
        const node = queue.shift();

        left = node.left;
        node.left = node.right;
        node.right = left;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return root;
};
// @lc code=end

