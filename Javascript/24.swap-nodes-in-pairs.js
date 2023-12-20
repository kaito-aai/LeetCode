/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let rest = head.next.next;
    let secondTarget = head.next;
    secondTarget.next = head;
    secondTarget.next.next = rest;
    head = secondTarget;

    let parent = head.next;
    let target = null;

    while (parent.next !== null) {
        if (target === null) {
            target = parent.next;
            continue;
        }

        if (target.next === null) {
            break;
        }

        rest = target.next.next;
        parent.next = target.next;
        parent.next.next = target;
        parent.next.next.next = rest;

        parent = target;
        target = null;
    }

    return head;
};
// @lc code=end

swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))))
