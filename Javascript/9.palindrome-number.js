/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const num = parseInt(x);
    if (isNaN(num)) {
        return false;
    }
    const numCharArray = num.toString().split('').map(Number);

    if (numCharArray.length === 1) {
        return true;
    }

    let firstHalfIndex = 0;
    let secondHalfIndex = 0;
    if (numCharArray.length % 2 === 0) {
        firstHalfIndex = numCharArray.length / 2;
        secondHalfIndex = firstHalfIndex;
    } else {
        firstHalfIndex = (numCharArray.length - 1) / 2;
        secondHalfIndex = firstHalfIndex + 1
    }

    if (firstHalfIndex === 0) {
        firstHalfIndex++;
    }

    const firstHalfArray = numCharArray.slice(0, firstHalfIndex);
    const secondHalfArray = numCharArray.slice(secondHalfIndex).reverse();

    if (firstHalfArray.map(String).reduce((p,c) => p + c) === secondHalfArray.map(String).reduce((p, c) => p + c )) {
        return true;
    }

    return false;
};
// @lc code=end

console.log(isPalindrome(121))