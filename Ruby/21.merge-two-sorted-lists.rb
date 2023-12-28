#
# @lc app=leetcode id=21 lang=ruby
#
# [21] Merge Two Sorted Lists
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    return list2 if list1.nil?
    return list1 if list2.nil?

    if list1.val < list2.val
        list1.next = merge_two_lists(list1.next, list2)
        return list1
    else 
        list2.next = merge_two_lists(list1, list2.next)
        return list2
    end
end
# @lc code=end
