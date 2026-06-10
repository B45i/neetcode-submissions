class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const pre = new Array(n);
        const post = new Array(n);
        const result = new Array(n);

        pre[0] = nums[0];
        for (let i = 1; i < n; i++)
            pre[i] = pre[i - 1] * nums[i];

        post[n - 1] = nums[n - 1];
        for (let i = n - 2; i >= 0; i--)
            post[i] = post[i + 1] * nums[i];

        for (let i = 0; i < n; i++) {
            const left = i === 0 ? 1 : pre[i - 1];
            const right = i === n - 1 ? 1 : post[i + 1];
            result[i] = left * right;
        }

        return result;
    }
}
