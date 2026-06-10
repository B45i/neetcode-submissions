class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
     twoSum(nums, target) {
        const obj = {};
        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const c = target - n;
            if(c in obj) return [obj[c] , i]
            obj[n] = i;
        }
    }

}
