/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) {
        return null;
    }

    const node = new ListNode(head.val);
    let currentNode = node;
    let checkTargetNode = head.next;

    while (checkTargetNode !== null) {
        if (currentNode.val === checkTargetNode.val) {
            checkTargetNode = checkTargetNode.next;
            continue;
        }

        currentNode.next = new ListNode(checkTargetNode.val);
        currentNode = currentNode.next;
        checkTargetNode = checkTargetNode.next;
    }

    return node;
};
// @lc code=end
