#
# @lc app=leetcode id=66 lang=ruby
#
# [66] Plus One
#

# @lc code=start
# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    digits[digits.size - 1] += 1

    isCarried = false
    (digits.size - 1).downto(0) { |i|
        if isCarried
            digits[i] += 1
            isCarried = false
        end

        if digits[i] > 9
            digits[i] -= 10
            isCarried = true
            next
        end
    }

    if isCarried
        digits.unshift(1)
    end

    return digits
end
# @lc code=end
