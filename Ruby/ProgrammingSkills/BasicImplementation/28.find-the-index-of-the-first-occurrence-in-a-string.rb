# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
    if haystack.size == needle.size
      return haystack == needle ? 0 : -1
    end
    i = 0

    # binding.irb
    while i < haystack.size - needle.size+1
      return i if haystack[i..i+needle.size-1] == needle
      i+=1
    end

    return -1
end


a = str_str "abc", "c"
print a