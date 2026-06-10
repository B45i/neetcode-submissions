class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const result = [-1];
        let max = arr[arr.length - 1];

        for (let i = arr.length - 2; i >= 0; i--) {
            result.push(max);
            max = Math.max(arr[i], max);
        }

        return result.reverse();
    }
}
