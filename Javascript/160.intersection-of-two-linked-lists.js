/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let targetA = headA;
    const aList = [];
    while (targetA !== null) {
        aList.push(targetA);
        targetA = targetA.next;
    }

    let targetB = headB;
    while (targetB !== null) {
        if (aList.some(v => v === targetB)) {
            return targetB;
        }
        targetB = targetB.next;
    }

    return null;
};
// @lc code=end

