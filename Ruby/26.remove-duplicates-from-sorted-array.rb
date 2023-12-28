#
# @lc app=leetcode id=26 lang=ruby
#
# [26] Remove Duplicates from Sorted Array
#

# @lc code=start
# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    counted = nil
    i = 0
    while i < nums.size
        if counted == nums[i]
            nums.delete_at(i)
        else
            counted = nums[i]
            i += 1
        end
    end

    return nums.size
end
# @lc code=end

