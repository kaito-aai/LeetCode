# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
    moveCount = 0
    for i in 0..nums.size-1
        if nums[i] == 0
            moveCount += 1
            next
        end

        if moveCount > 0
            n = nums[i]
            nums[i] = 0
            nums[i - moveCount] = n
        end
    end
end

a = move_zeroes [0,1,0,3,12]
print a