#
# @lc app=leetcode id=21 lang=ruby
#
# [21] Merge Two Sorted Lists
#

# @lc code=start
# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    head = ListNode.new
    current = head
    current1 = list1
    current2 = list2

    while current1 != nil || current2 != nil
        if current1 == nil
            current.next = current2
            current2 = current2.next
        elsif current2 == nil
            current.next = current1
            current1 = current1.next
        elsif current2.val < current1.val
            current.next = current2
            current2 = current2.next
        else current1.val < current2.val
            current.next = current1
            current1 = current1.next
        end

        current = current.next
    end

    return head.next
end
# @lc code=end

merge_two_lists(ListNode.new(1, ListNode.new(2, ListNode.new(4))), ListNode.new(1, ListNode.new(3, ListNode.new(4))))