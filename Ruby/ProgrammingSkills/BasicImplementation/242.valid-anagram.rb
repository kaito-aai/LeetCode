# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
  return false if s.size != t.size
  abc = Array.new(26).fill(0)
  aCode = 'a'.ord

  s.chars.each_index do |i|
    abc[s[i].ord - aCode] += 1
    abc[t[i].ord - aCode] -= 1
  end

  abc.all?(0)
end

a = is_anagram "anagram","nagaram"
print a