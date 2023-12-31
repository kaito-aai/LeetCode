#
# @lc app=leetcode id=28 lang=ruby
#
# [28] Find the Index of the First Occurrence in a String
#

# @lc code=start
# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
    for i in 0...haystack.size-needle.size+1
        if needle == haystack.slice(i, needle.size)
            return i
        end
    end

    return -1
end
# @lc code=end

str_str("abc", "c")