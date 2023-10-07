/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let currentNode = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const x = l1 !== null ? l1.val : 0;
        const y = l2 !== null ? l2.val : 0;
        const sum = x + y + carry;
        carry = sum >= 10 ? 1 : 0;
        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;

        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }

    return dummy.next;
};
// @lc code=end

const a = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))),new ListNode(5, new ListNode(6, new ListNode(4))))
console.log(a);