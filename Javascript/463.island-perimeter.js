/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (x = 0; x < grid.length; x++) {
        for (y = 0; y < grid[x].length; y++) {
            if (grid[x][y] !== 1) {
                continue;
            }

            if (x === 0 || grid[x - 1][y] === 0) {
                perimeter++;
            }

            if (y === 0 || grid[x][y - 1] === 0) {
                perimeter++;
            }

            if (y === grid[x].length - 1 || grid[x][y + 1] === 0) {
                perimeter++;
            }

            if (x === grid.length - 1 || grid[x + 1][y] === 0) {
                perimeter++;
            }
        }
    }

    return perimeter;
};
// @lc code=end

islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]);