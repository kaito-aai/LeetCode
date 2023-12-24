#
# @lc app=leetcode id=13 lang=ruby
#
# [13] Roman to Integer
#

# @lc code=start
# @param {String} s
# @return {Integer}
def roman_to_int(s)
    map = { "I" => 1, "V" => 5, "X" => 10, "L" => 50, "C" => 100, "D" => 500, "M" => 1000 }

    num = 0
    i = 0

    while i < s.size
        currentChar = map[s[i]]
        nextChar = map[s[i + 1]]

        if nextChar == nil
            nextChar = 0
        end

        if nextChar > currentChar
            num += ((nextChar / currentChar) - 1) * currentChar
            i += 2
            next
        end

        num += currentChar
        i += 1
    end

    return num
end
# @lc code=end

roman_to_int ""