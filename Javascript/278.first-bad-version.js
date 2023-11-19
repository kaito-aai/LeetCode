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
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
var isBadVersion = function(version) {
    if (version >= 4) {
        return true;
    }
};

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
        let firstBad = n;
        const checked = new Set();

        while (rangeHead < rangeTail) {
            const numsCount = rangeTail - rangeHead + 1;
            const center = Math.trunc(((rangeHead + rangeTail) * numsCount / 2) / numsCount);

            if (checked.has(center)) {
                return firstBad;
            }

            if (!isBadVersion(center)) {
                rangeHead = center;
                checked.add(center);
                continue;
            }

            if (center < firstBad) {
                firstBad = center;
                rangeTail = center;
                checked.add(center);
                continue;
            }

            return firstBad;
        }

        return firstBad;
    };
};
// @lc code=end
