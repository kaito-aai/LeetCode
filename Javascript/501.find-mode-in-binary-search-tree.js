/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
 * @return {number[]}
 */
var findMode = function(root) {
    const counter = new Map();
    /**
     * 
     * @param {TreeNode} node 
     */
    const count = (node) => {
        if (!node) {
            return;
        }
        if (!counter.has(node.val)) {
            counter.set(node.val, 0)
        }
        counter.set(node.val, counter.get(node.val)+1);

        count(node.left);
        count(node.right);
    }

    count(root);

    let result = [];
    let max = Math.pow(10, 5) * -1;

    counter.forEach((v, k) => {
        if (v > max) {
            max = v;
            result = [k];
            return;
        }

        if (v === max) {
            result.push(k);
        }
    })

    return result;
};
// @lc code=end
findMode(new TreeNode(-2, new TreeNode(-2), new TreeNode(-2)))
