/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const stack = [];
    let current = head;
    while (current !== null) {
        stack.push(current.val);
        current = current.next;
    }

    let firstHalf = null;
    if (stack.length % 2 === 0) {
        firstHalf = stack.splice(0, stack.length / 2);
    } else {
        firstHalf = stack.splice(0, (stack.length - 1) / 2);
        stack.shift();
    }
    stack.reverse();

    return firstHalf.every((v, i) => v === stack[i]);
};
// @lc code=end
