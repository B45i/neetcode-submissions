class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for (let op of operations) {
            switch (op) {
                case '+':
                    stack.push(stack.at(-1) + stack.at(-2));
                    break;
                case 'D':
                    stack.push(stack.at(-1) * 2);
                    break;
                case 'C':
                    stack.pop();
                    break; 
                default:
                    const num = parseInt(op);
                    stack.push(num);
            }
        }
        return stack.reduce((curr, s) => curr + s, 0);
    }
}
