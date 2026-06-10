class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(brd) {
        const cols = new Map();
        const rows = new Map();
        const sqr = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const x = brd[r][c];
                if (x === '.') continue;

                const sqKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
                if (rows.get(r) && rows.get(r).has(x) ||
                    cols.get(c) && cols.get(c).has(x) ||
                    sqr.get(sqKey) && sqr.get(sqKey).has(x)
                ) {
                    return false;
                }

                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());
                if (!sqr.has(sqKey)) sqr.set(sqKey, new Set());


                rows.get(r).add(brd[r][c]);
                cols.get(c).add(brd[r][c]);
                sqr.get(sqKey).add(brd[r][c]);

            }
        }

        return true;
    }
}
