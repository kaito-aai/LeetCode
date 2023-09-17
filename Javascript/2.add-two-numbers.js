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
    const nodeListToArray = (nl) => {
        const arr = [];
        let target = nl;
        while (true) {
            arr.push(BigInt(target.val));
            if (target.next !== null) {
                target = target.next;
                continue;
            }
            break;
        }
        return arr;
    }

    const l1Arr = nodeListToArray(l1);
    const l2Arr = nodeListToArray(l2);
    const getReverseNum = (l) => {
        return l.reverse().reduce((p,c,ci) => {
            return p + (c * (BigInt(10) ** BigInt(l.length - ci - 1)));
        }, BigInt(0));
    };

    const num1 = getReverseNum(l1Arr);
    const num2 = getReverseNum(l2Arr);

    const answerArr = (num1 + num2).toString().split('').map(BigInt).reverse();

    // ListNodeへ変換
    const nodelistArr = [];
    answerArr.forEach((v) => {
        nodelistArr.push(new ListNode(v, undefined))
    });

    const listnode = nodelistArr[0];
    let target = listnode;
    nodelistArr.forEach((nl, i) => {
        if (i === 0) {
            return;
        }
        target.next = nl;
        target = target.next;
    });

    return listnode;
};
// @lc code=end
