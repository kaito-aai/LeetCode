#
# @lc app=leetcode id=83 lang=ruby
#
# [83] Remove Duplicates from Sorted List
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
# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
    current = head
    while current != nil && current.next != nil
        if current.val != current.next.val
            current = current.next
            next
        end

        current.next = current.next.next
    end

    return head
end
# @lc code=end
