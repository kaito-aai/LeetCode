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
    while (head !== null) {
        stack.push(head.val);
        head = head.next;
    }

    for (i = 0; i < stack.length / 2; i++) {
        if (stack[i] !== stack[stack.length - i - 1]) {
            return false;
        }
    }

    return true;
};
// @lc code=end
