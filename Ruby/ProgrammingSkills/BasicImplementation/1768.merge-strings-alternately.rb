# @param {String} word1
# @param {String} word2
# @return {String}
def merge_alternately(word1, word2)
    str = ""

    while word1.size > 0 || word2.size > 0
        str = str + word1.slice!(0) if word1.size > 0

        str = str + word2.slice!(0) if word2.size > 0
    end

    str
end

a = merge_alternately "aaa", "bbb"
print a