class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) { 
        let maxC = 0;
        let count = 0
        for(let n of nums) {
            if(!n) {
                maxC = Math.max(maxC, count);
                count = 0;
            }
            else {
                count++;
            }
        }
        return Math.max(maxC, count);
    }
}
