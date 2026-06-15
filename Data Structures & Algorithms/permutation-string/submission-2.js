class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const getKey = (str) => {
            str = str.toLowerCase();
            const keys = new Array(26).fill(0);
            for (let c of str) {
                const idx = c.charCodeAt(0) - 97;
                keys[idx] = (keys[idx] || 0) + 1;
            }
            return keys.join("_");
        };

        const key1 = getKey(s1);
        const sLength = s1.length;
        for (let i = sLength; i <= s2.length; i++) {
            const key2 = getKey(s2.slice(i - sLength, i));
            console.log(s2.slice(i - sLength, i), key1, key2);
            if (key1 === key2) return true;
        }
        return false;
    }
}
