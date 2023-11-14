/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function(root) {
    const getLeftDepth = (node) => {
        if (!node) return 0;
        return getLeftDepth(node.left) + 1;
    }

    const getRightDepth = (node) => {
        if (!node) return 0;
        return getRightDepth(node.right) + 1;
    }

    const traverse = (node) => {
        const leftDepth = getLeftDepth(node);
        const rightDepth = getRightDepth(node);

        if (leftDepth === rightDepth) {
            return Math.pow(2, leftDepth) - 1
        }

        return traverse(node.left) + traverse(node.right) + 1;
    }

    return traverse(root)
};
// @lc code=end
