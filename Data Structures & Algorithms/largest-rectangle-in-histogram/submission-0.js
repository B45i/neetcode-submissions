class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(h) {
        const n = h.length
        let max = 0;
        let stack = [];

        for (let i = 0; i < n; i++) {
            let start = i;
            while(stack.length > 0 &&
            stack.at(-1)[1] > h[i]) {
                const [idx, hx] = stack.pop();
                max = Math.max(max, hx * (i - idx));
                start = idx
            }
            stack.push([start, h[i]])
        }
        for (const [index, height] of stack) {
            max = Math.max(max, height * (h.length - index));
        }
        return max;
    }
}
