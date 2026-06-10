class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // const numSet = new Set(nums);
        // let longest = 0;

        // for(let n of numSet) {
        //     if(!numSet.has(n - 1)) {
        //         let length = 1;
        //         while(numSet.has(n + length)) length++;
        //         longest = Math.max(longest, length); 
        //     }
        // }
        // return longest;

        const m = new Map();
        let res = 0;

        for (let n of nums) {
            if (!m.has(n)) {
                const len = (m.get(n - 1) || 0) + (m.get(n + 1) || 0) + 1;
                m.set(n, len);
                m.set(n - (m.get(n - 1) || 0), len);
                m.set(n + (m.get(n + 1) || 0), len);
                res = Math.max(res, m.get(n))
            }
        }

        return res;
    }
}
