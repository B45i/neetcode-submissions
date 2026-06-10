class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const count = [0, 0];
        for(let s of students) count[s]++;
        console.log(count);

        for(let s of sandwiches) {
            if (!count[s]) break; 
            count[s]--;
        }

        return count[0] + count[1];
    }
}