#
# @lc app=leetcode id=88 lang=ruby
#
# [88] Merge Sorted Array
#

# @lc code=start
# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
    i = m - 1
    j = n - 1
    k = m + n - 1

    while j >= 0
        if i >= 0 && nums1[i] > nums2[j]
            nums1[k] = nums1[i]
            i -= 1
        else
            nums1[k] = nums2[j]
            j -= 1
        end

        k -= 1
    end
end
# @lc code=end
