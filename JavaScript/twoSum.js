var twoSum = function(nums, target) {
        rtype = []
        for (let i = 0; i < nums.length;i++) {
            for (let x = i + 1; x < nums.length;x++) {
                if (nums[i] + nums[x] == target) {
                    rtype.push(i)
                    rtype.push(x)
                    return rtype }
        } }
};