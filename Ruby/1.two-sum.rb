#
# @lc app=leetcode id=1 lang=ruby
#
# [1] Two Sum
#

# @lc code=start
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    hash = {}
    for i in 0...nums.size
        hash[target - nums[i]] = i
    end

    for i in 0...nums.size
        if !hash.key? nums[i]
            next
        end
        extracted = hash[nums[i]]
        if extracted == i
            next
        end
        return [i, extracted]
    end
end
# @lc code=end

print two_sum([3,2,4], 6)
