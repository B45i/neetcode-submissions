class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const curr = nums[l] + nums[r];

            if (curr > target)
                r--
            else if (curr < target)
                l++
            else return [l + 1, r + 1]
        }

        return []

    }
}
