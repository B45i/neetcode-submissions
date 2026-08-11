class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const lastSeen = new Map();
        let best = 0;
        let left = 0;

        for(let r = 0; r < s.length; r++) {
            const ch = s[r];

            if(lastSeen.has(ch) && lastSeen.get(ch) >= left) {
                left = lastSeen.get(ch) + 1
            }
            lastSeen.set(ch, r);
            best = Math.max(best, r - left + 1)
        }


        return best;
    }
}
