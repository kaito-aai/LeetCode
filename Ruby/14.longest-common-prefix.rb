#
# @lc app=leetcode id=14 lang=ruby
#
# [14] Longest Common Prefix
#

# @lc code=start
# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    for p in 0...strs[0].size
        for i in 1...strs.size
            if strs[i][p] != strs[0][p]
                return strs[0].slice(0, p)
            end
        end
    end

    return strs[0]
end
# @lc code=end

longest_common_prefix(["flower","flow","flight"])