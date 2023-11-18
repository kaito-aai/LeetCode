/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
    /**
     * 
     * @param {string} path 
     * @param {TreeNode} node 
     * @returns 
     */
    const findPaths = (path, node) => {
        if (!node) {
            return;
        }

        path += `${node.val}`
        if (!node.left && !node.right) {
            paths.push(path);
            return;
        }
        path += '->';

        findPaths(path, node.left);
        findPaths(path, node.right);
    }

    findPaths("", root);

    return paths;
};
// @lc code=end

