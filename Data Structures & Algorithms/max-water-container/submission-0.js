class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(hs) {
        let max = 0;
        for(let i = 0; i < hs.length; i ++) {
            for(let j = i + 1; j < hs.length; j++) {
                let s = Math.min(hs[i], hs[j]);
                max = Math.max(max, s * (j - i))
            }
        }
        return max;
    }
}
