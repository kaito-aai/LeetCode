/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function(head) {
    let node = head;
    const arr = [];
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }

    const reversed = new ListNode();
    let current = reversed;
    for (i = arr.length - 1; i >= 0; i--) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return reversed.next;
};
// @lc code=end
