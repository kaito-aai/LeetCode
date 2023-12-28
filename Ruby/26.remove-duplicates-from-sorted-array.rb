#
# @lc app=leetcode id=26 lang=ruby
#
# [26] Remove Duplicates from Sorted Array
#

# @lc code=start
# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    map = {}
    length = nums.size

    0.upto(length - 1) do |i|
        if map[nums[i]]
            nums[i] = nil
        else
            map[nums[i]] = nums[i]
        end
    end

    nums.compact!
    nums.size
end
# @lc code=end

