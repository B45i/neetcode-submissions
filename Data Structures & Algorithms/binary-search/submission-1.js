class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(!nums.length) return -1;

        const mid = Math.floor(nums.length - 1 / 2);

        if(nums[mid] === target) {
            return mid
        } else if (target < nums[mid]) {
            return this.search(nums.slice(0, mid), target)
        }
         else if (target > nums[mid]) {
            return this.search(nums.slice(mid, nums.length-1), target)
         }
    }
}
