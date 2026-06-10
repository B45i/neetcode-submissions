class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(hs) {
        let n = hs.length;
        if (!n) return 0;

        // let lMax = new Array(n).fill(0);
        // let rMax = new Array(n).fill(0);

        // lMax[0] = hs[0];
        // for (let i = 1; i < n; i++) lMax[i] = Math.max(lMax[i - 1], hs[i]);

        // rMax[n - 1] = hs[n - 1];
        // for (let i = n - 2; i >= 0; i--) rMax[i] = Math.max(rMax[i + 1], hs[i]);

        // let res = 0;
        // for (let i = 0; i < n; i++) res += Math.min(lMax[i], rMax[i]) - hs[i];
        // return res;

        let l = 0;
        let r = n - 1;
        let lMax = hs[l];
        let rMax = hs[r];
        let res = 0;

        while (l < r) {
            if (lMax < rMax) {
                l++;
                lMax = Math.max(lMax, hs[l]);
                res += lMax - hs[l];
            } else {
                r--;
                rMax = Math.max(rMax, hs[r]);
                res += rMax - hs[r];
            }
        }
        return res;
    }
}
