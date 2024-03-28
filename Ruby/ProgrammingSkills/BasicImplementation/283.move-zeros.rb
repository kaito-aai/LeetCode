# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
    size = nums.size
    nums.delete(0)
    
    for i in 0..size-nums.size
        nums<<0
    end

    nums
end

a = move_zeroes [0,1,0,3,12]
print a