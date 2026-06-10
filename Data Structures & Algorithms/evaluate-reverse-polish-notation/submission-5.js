class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tkns) {
        const stack = [];
        for (let tkn of tkns) {
            const num = parseInt(tkn);
            console.log(tkn, stack)
            if (!isNaN(num)) {
                stack.push(num);
            } else {
                const a = stack.pop();
                const b = stack.pop();
                switch (tkn) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(b - a);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        stack.push(Math.trunc(b / a));
                        break;
                }
            }
        }
        return stack[0];
    }
}
