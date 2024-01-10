#
# @lc app=leetcode id=69 lang=ruby
#
# [69] Sqrt(x)
#

# @lc code=start
# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    return 0 if x == 0
    return 1 if x == 1

    for i in 0...x
        return i if (i * i) <= x && x < ((i + 1) * (i + 1))
    end
end
# @lc code=end

my_sqrt(1)