class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = [];
        for (let s of strs) {
            result.push(`${s.length}#${s}`);
        }
        return result.join('');
    }

    decode(str) {
        const r = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;
            const len = parseInt(str.slice(i, j));
            r.push(str.slice(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return r;
    }
}
