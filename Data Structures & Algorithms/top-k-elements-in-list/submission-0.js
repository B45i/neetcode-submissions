class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let fq = {};
        for(let n of nums) {
            fq[n] = (fq[n] || 0) +1
        }
        return Object.keys(fq).sort((a,b) => fq[b] - fq[a]).slice(0, k);
    }
}
