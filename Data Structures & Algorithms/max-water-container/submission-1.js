class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(hs) {
        let max = 0;
        // for(let i = 0; i < hs.length; i ++) {
        //     for(let j = i + 1; j < hs.length; j++) {
        //         let s = Math.min(hs[i], hs[j]);
        //         max = Math.max(max, s * (j - i))
        //     }
        // }

        let l = 0;
        let r = hs.length - 1;
        while (l < r) {
            const s = Math.min(hs[l], hs[r]);
            max = Math.max(max, s * (r - l));
            if (hs[l] < hs[r]) l++;
            else r--;
        }
        return max;
    }
}
