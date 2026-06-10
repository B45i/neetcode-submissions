class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let fq = {};
        for (let n of nums) {
            fq[n] = (fq[n] || 0) + 1
        }
        // return Object.keys(fq).sort((a,b) => fq[b] - fq[a]).slice(0, k);
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        for(const [num, count] of Object.entries(fq)) bucket[count].push(num)
        const result = [];
        for(let i = bucket.length -1; i>=0 && result.length < k; i--) result.push(...bucket[i])
        return result;

    }
}
