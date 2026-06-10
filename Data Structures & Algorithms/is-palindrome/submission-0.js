class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let arr = s.toLowerCase().replace(/[^a-z0-9]/gi, ''); 
       return arr === arr.split('').reverse().join('');
       
    }
}
