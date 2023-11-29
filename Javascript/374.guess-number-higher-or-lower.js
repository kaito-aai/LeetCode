/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * 
 */
 var guess = function(num) {
    const answer = 2;
    if (num < answer) {
        return 1;
    }
    if (num > answer) {
        return -1;
    }

    return 0;
 }

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let largeNearest = n;
    let smallNearest = 1;
    while (smallNearest < largeNearest) {
        let guessed = Math.trunc((largeNearest + smallNearest) / 2);
        let c = guess(guessed);
        if (c === 0) {
            return guessed;
        }

        if (c === 1) {
            smallNearest = guessed + 1;
        }

        if (c === -1) {
            largeNearest = guessed - 1;
        }
    }
    return smallNearest;
};
// @lc code=end

const a = guessNumber(2)
console.log(a);
