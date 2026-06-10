class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const os = {};
        const ot = {}
        for (let c of s) os[c] = (os[c] || 0) + 1;
        for (let c of t) ot[c] = (ot[c] || 0) + 1;
        if (Object.keys(os).length !== Object.keys(ot).length) return false;
        for (let k in os) {
            if(os[k] !== ot[k]) return false;
        }
        return true;
    }
}
