class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (let c of s) {
            console.log(c, stack);
            if (c === ']' && stack.pop() !== '[') return false;
            else if (c === ')' && stack.pop() !== '(') return false;
            else if (c === '}' && stack.pop() !== '{') return false;
            if (c === '[' || c === '(' || c === '{') stack.push(c);
        }
        return stack.length ? false : true;
    }
}
