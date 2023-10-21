/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    /**
     * 
     * @param {TreeNode} node 
     */
    const measureDepth = (node, count) => {
        if (node === null) {
            return count;
        }

        count++;
        const left = measureDepth(node.left, count);
        const right = measureDepth(node.right, count);

        return left > right ? left : right;
    }

    if (root === null) {
        return true;
    }

    const l = measureDepth(root.left, 0);
    const r = measureDepth(root.right, 0);

    return Math.abs(l - r) <= 1 && isBalanced(root.left) == true && isBalanced(root.right) == true;
}
// @lc code=end

console.log(isBalanced(new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(2, null, new TreeNode(3)))));