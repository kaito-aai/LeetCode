/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let currentTarget = head;
    const checked = [];

    while (currentTarget !== null) {
        if (checked.some((v) => v === currentTarget)) {
            return true;
        }
        
        checked.push(currentTarget);
        currentTarget = currentTarget.next;
    }
    return false;
};
// @lc code=end

