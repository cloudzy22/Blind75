class Solution(object):
    def twoSum(self, nums, target):
        rtype = []
        for x in range(len(nums)-1):
            for y in range(x+1,len(nums)):
                if nums[x] + nums[y] == target:
                    rtype.append(x)
                    rtype.append(y)
                    return rtype