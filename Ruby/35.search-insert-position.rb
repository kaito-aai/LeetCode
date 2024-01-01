#
# @lc app=leetcode id=35 lang=ruby
#
# [35] Search Insert Position
#

# @lc code=start
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    return 0 if nums.nil?
    left = 0
    right = nums.size - 1
    while left <= right do
        mid = (right - left) / 2 + left
        if nums[mid] == target
            return mid
        elsif target > nums[mid]
            left = mid + 1
        else
            right = mid - 1
        end
    end
    left
end
# @lc code=end

search_insert([1, 3, 5, 6], 2)
