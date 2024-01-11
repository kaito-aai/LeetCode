#
# @lc app=leetcode id=70 lang=ruby
#
# [70] Climbing Stairs
#

# @lc code=start
# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
    return 1 if n == 0 || n == 1

    table = Array.new(n+1, 0)

    table[0] = 1
    table[1] = 1

    for i in 2...n+1
        table[i] = table[i - 1] + table[i - 2]
    end

    return table[n]
end
# @lc code=end
