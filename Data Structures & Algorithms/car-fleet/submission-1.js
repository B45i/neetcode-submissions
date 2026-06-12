class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, pos, speed) {

        const arr = [];
        for (let i = 0; i < pos.length; i++) {
            arr.push([pos[i], speed[i]]);
        }

        arr.sort((a, b) => b[0] - a[0]);

        const stack = [];
        for(let [p, s] of arr) {
            stack.push((target - p) / s)
            if(stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
                stack.pop()
            }
        }

        return stack.length;
    }
}
