#
# @lc app=leetcode id=9 lang=ruby
#
# [9] Palindrome Number
#

# @lc code=start
# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    s = x.to_s
    for i in 0...(s.size / 2)
        if s[i] != s[s.size - 1 - i]
            return false
        end
    end

    return true
end
# @lc code=end

