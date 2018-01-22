class Solve {
    constructor(b) {
        this.board = b.slice();
    }
    available(val, arr) {
        return arr.indexOf(val) === -1;
    }

    getRow(row) {
        return this.board[row];
    }

    getCol(col) {
        return this.board.map(a => a[col]);
    }

    getGrid(row, col) {
        let size = Math.sqrt(this.board.length)
        let tRow = row - row % (size);
        let tCol = col - col % (size);
        return new Array(size * size).fill(1).map((a, b) => {
            let dvd = Math.floor(b / size);
            let rmd = b % size;
            return this.board[tRow + dvd][tCol + rmd];
        })
    }

    check(a, r, c) {
        return (this.available(a, this.getRow(r)) && this.available(a, this.getCol(c)) && this.available(a, this.getGrid(r, c)));
    }

    findEmpty() {
        let emptyArr = [];
        this.board.forEach((a, b) => {
            a.forEach((i, j) => {
                if (i === ' ') {
                    emptyArr.push([b, j]);
                }
            });
        });
        return emptyArr;
    }

    // Check if the game is over.
    checkWin(x) {
        return (x.map(a => a.filter(b => b === ' ').length).reduce((i, j) => Math.max(i, j)) === 0);
    }

    // Main Algorithm for BackTracking
    solve() {
        let b = this.board.slice();
        let idx = 0;
        let empArr = this.findEmpty();
        while (!this.checkWin(b)) { // when game is not over yet
            let curRow = empArr[idx][0];
            let curCol = empArr[idx][1];
            let curCell = b[curRow][curCol];
            let done = false;
            let i = curCell === ' '
                ? 1
                : parseInt(curCell) + 1;
            while (!done && i <= b.length) {
                if (this.check('' + i, curRow, curCol)) {
                    b[curRow][curCol] = '' + i;
                    done = true;
                }
                i++;
            }
            idx += done
                ? 1
                : -1;
            b[curRow][curCol] = done
                ? b[curRow][curCol]
                : ' ';
        }

        return b;
    }

}
