#
# @lc app=leetcode id=20 lang=ruby
#
# [20] Valid Parentheses
#

# @lc code=start
# @param {String} s
# @return {Boolean}
def is_valid(s)
    map = { "(" => ")", "{" => "}", "[" => "]" }
    stack = []

    for i in 0...s.size
        if s[i] == "(" || s[i] == "{" || s[i] == "["
            stack.append s[i]
            next
        end

        if s[i] != map[stack.pop]
            return false
        end
    end

    return stack.size == 0
end
# @lc code=end
