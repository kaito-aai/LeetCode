/*
 * @lc app=leetcode id=791 lang=javascript
 *
 * [791] Custom Sort String

 */

// @lc code=start
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let ordered = "";
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        const count = map.get(s[i])
        const updatedCount = count ? count + 1 : 1
        map.set(s[i], updatedCount)
    }

    for (let i = 0; i < order.length; i++) {
        const count = map.get(order[i])
        if (!count) {
            continue
        }

        ordered += order[i].repeat(count);
        map.delete(order[i])
    }

    map.forEach((v, k) => {
        ordered += k.repeat(v);
    })

    return ordered
};
// @lc code=end
