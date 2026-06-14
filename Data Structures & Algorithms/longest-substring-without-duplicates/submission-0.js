class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let max = 0;
        const charSet = new Set();
        while (r < s.length) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l])
                l++
            } 
            charSet.add(s[r])
            max = Math.max(max, (r - l) + 1);
            r++;
        }
        return max;
    }
}
