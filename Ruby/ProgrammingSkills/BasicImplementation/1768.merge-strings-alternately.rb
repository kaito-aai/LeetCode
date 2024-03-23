# @param {String} word1
# @param {String} word2
# @return {String}
def merge_alternately(word1, word2)
    str = ""

    while !word1.empty? && !word2.empty?
        str += word1.slice!(0) + word2.slice!(0)
    end

    str + word1 + word2
end

a = merge_alternately "ab", "pqrs"
print a