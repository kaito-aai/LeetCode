/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let rangeHead = 1;
        let rangeTail = n;

        while (rangeHead < rangeTail) {
            const center = Math.floor(rangeHead + (rangeTail - rangeHead) / 2);

            if (isBadVersion(center)) {
                rangeTail = center;
            } else {
                rangeHead = center + 1;
            }
        }

        return rangeHead;
    };
};
// @lc code=end
