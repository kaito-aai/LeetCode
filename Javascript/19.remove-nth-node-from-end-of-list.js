/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const getFlattenNode = (node, arr) => {
        if (!node) {
            return arr;
        }

        arr.push(node);
        return getFlattenNode(node.next, arr);
    }

    const flatten = getFlattenNode(head, []);
    const nodeBeforeTarget = flatten[flatten.length - 1 - n];
    const nodeAfterTarget = flatten[flatten.length - 1 - n + 2];
    if (nodeBeforeTarget && nodeAfterTarget) {
        nodeBeforeTarget.next = nodeAfterTarget;
        return head;
    }
    if (!nodeBeforeTarget && !nodeAfterTarget) {
        head = null;
        return head;
    }
    if (!nodeBeforeTarget) {
        head = nodeAfterTarget;
        return head;
    }
    if (!nodeAfterTarget) {
        nodeBeforeTarget.next = null;
        return head;
    }
};
// @lc code=end

removeNthFromEnd(new ListNode(1, new ListNode(2)), 2);