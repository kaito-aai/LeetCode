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
    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (!fast) {
        return head.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return head;
};
// @lc code=end

removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2);