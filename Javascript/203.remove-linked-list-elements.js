/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let beforeNode = null;
    let currentNode = head;
    while (currentNode !== null) {
        if (currentNode.val !== val) {
            beforeNode = currentNode
            currentNode = currentNode.next;
            continue;
        }

        if (beforeNode === null) {
            head = currentNode.next;
            currentNode = currentNode.next;
            continue;
        }

        beforeNode.next = currentNode.next;
        currentNode = currentNode.next;
        continue;
    }

    return head;
};
// @lc code=end
