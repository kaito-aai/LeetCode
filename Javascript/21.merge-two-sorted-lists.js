/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

/**
 * 
 * @param {number} val 
 * @param {ListNode} next 
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const initialNode = new ListNode(0);
    let current = initialNode;
    while (list1 !== null || list2 !== null) {
        if (list1 === null) {
            current.next = new ListNode(list2.val);
            current = current.next;
            list2 = list2.next;
            continue;
        }

        if (list2 === null) {
            current.next = new ListNode(list1.val);
            current = current.next;
            list1 = list1.next;
            continue;
        }

        if (list1.val < list2.val) {
            current.next = new ListNode(list1.val);
            current = current.next;
            list1 = list1.next;
            continue;
        }

        if (list2 !== null) {
            current.next = new ListNode(list2.val);
            current = current.next;
            list2 = list2.next;
            continue;
        }
    }

    return initialNode.next;
};
// @lc code=end

