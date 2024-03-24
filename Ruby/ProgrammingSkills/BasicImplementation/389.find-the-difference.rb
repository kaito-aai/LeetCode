# @param {String} s
# @param {String} t
# @return {Character}
def find_the_difference(s, t)
    sCodeSum = s.codepoints.sum
    tCodeSum = t.codepoints.sum

    (tCodeSum - sCodeSum).chr
end

a = find_the_difference "abcd", "abcde"
print a