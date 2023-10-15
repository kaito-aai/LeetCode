/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const compareNode = (nodeA, nodeB) => {
        if (nodeA === null && nodeB === null) {
            return true;
        }
        if (nodeA === null || nodeB === null) {
            return false;
        }

        if (!compareNode(nodeA.left, nodeB.left)) {
            return false;
        }
        if (nodeA.val !== nodeB.val) {
            return false;
        }
        if (!compareNode(nodeA.right, nodeB.right)) {
            return false;
        }
        return true;
    }

    return compareNode(p, q);
};
// @lc code=end

const nodeA = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const nodeB = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(isSameTree(nodeA, nodeB))