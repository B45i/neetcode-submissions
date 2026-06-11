class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const l = temps.length
        if(!l) return []
        const res = new Array(l).fill(0);
        const stack = [];

        for(let i in temps) {
            const t = temps[i];
            while(stack.length > 0 && t > stack.at(-1)[0]) {
                const [_, sI] = stack.pop();
                res[sI] = i - sI;
            }
            stack.push([t, i])
        }
        return res;
    }
}
