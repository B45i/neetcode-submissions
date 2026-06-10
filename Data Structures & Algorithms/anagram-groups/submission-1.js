class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(let s of strs) {
         const cnt = new Array(26).fill(0);
         for(let c of s) {
            cnt[c.charCodeAt(0) - 97] += 1;
         }
         const key = cnt.join(',');
         if(!res[key]) {
            res[key] = [];
         }
         res[key].push(s)
        }
        return Object.values(res);
    }
}
