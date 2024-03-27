# @param {String} s
# @return {Boolean}
def repeated_substring_pattern(s)
    (s + s)[1..-2].include?(s)
end

a = repeated_substring_pattern "a"
print a