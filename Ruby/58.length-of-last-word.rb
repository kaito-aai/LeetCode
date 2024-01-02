#
# @lc app=leetcode id=58 lang=ruby
#
# [58] Length of Last Word
#

# @lc code=start
# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    word = ""

    s.strip!
    for i in 0...s.size
        if s[i] == " "
            word = ""
        else
            word += s[i]
        end
    end

    return word.size
end
# @lc code=end

