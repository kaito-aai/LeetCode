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
    const node = new ListNode();
    let nodeCurrent = node;
    let checkCurrent = head;

    while (checkCurrent !== null) {
        if (checkCurrent.val !== val) {
            nodeCurrent.next = new ListNode(checkCurrent.val);
            nodeCurrent = nodeCurrent.next;
        }

        checkCurrent = checkCurrent.next;
    }

    return node.next;
};
// @lc code=end

removeElements(
    new ListNode(1,
        new ListNode(2,
            new ListNode(6,
                new ListNode(3,
                    new ListNode(4,
                        new ListNode(5,
                            new ListNode(6))))))),
    6)
