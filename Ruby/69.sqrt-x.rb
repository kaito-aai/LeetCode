#
# @lc app=leetcode id=69 lang=ruby
#
# [69] Sqrt(x)
#

# @lc code=start
# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    return x if x < 2

    left = 2
    right = x / 2

    while left <= right
        mid = (left + right) / 2

        square = mid * mid

        if square == x
            return mid
        elsif square > x
            right = mid - 1
        else
            left = mid + 1
        end
    end

    return right
end
# @lc code=end

my_sqrt(1)