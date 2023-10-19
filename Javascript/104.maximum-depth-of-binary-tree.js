/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
    const measureDepth = (node, depth) => {
        if (node === null) {
            return depth - 1;
        }
        if (node.left === null && node.right === null) {
            return depth;
        }
        depth++;
        const r = measureDepth(node.right, depth);
        const l = measureDepth(node.left, depth);
        return r > l ? r : l;
    }

    return measureDepth(root, 0)+1;
};
// @lc code=end
