class Solve:
    def __init__(self, board):
        self.board = board

    # Return true if win

    def get_row(self, row):
        return self.board[row]

    def get_col(self, col):
        return [row[col] for row in self.board]

    def get_block(self, block):
        row = int(block / 3) * 3
        col = (block % 3) * 3
        return self.board[row][col:col + 3] + self.board[row + 1][col:col + 3] + self.board[row + 2][col:col + 3]

    def get_block_no(self, row, col):
        block = int(row / 3) * 3 + int(col / 3)
        return block

    def completed(self, fn):
        target = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for row in range(0, 9):
            if sorted(fn(row)) != target:
                return False
        return True

    def check_win(self):
        # check row
        return self.completed(self.get_col) and self.completed(self.get_row) and self.completed(self.get_block)

    def avail(self, arr, num):  # check if the number is already the block, return True if num is not
        return num not in arr

    def check(self, num, row, col):
        return self.avail(self.get_col(col), num) and self.avail(self.get_row(row), num) and self.avail(self.get_block(self.get_block_no(row, col)), num)

    def get_empty(self):  # return the empty list
        empty_list = []
        for x, row in enumerate(self.board):
            for y, col in enumerate(row):
                if self.board[x][y] == 0:
                    empty_list.append([x, y])
        return empty_list

    def solve(self):
        final_board = self.board
        idx = 0
        empty_list = self.get_empty()
        # for i in range (0,41):
        while not self.check_win():
            cur_row = empty_list[idx][0]
            cur_col = empty_list[idx][1]
            cur_cell = self.board[cur_row][cur_col]
            done = False
            num = 1 if cur_cell == 0 else cur_cell + 1
            while not done and num <= len(self.board):
                if self.check(num, cur_row, cur_col):
                    final_board[cur_row][cur_col] = num
                    done = True
                num += 1

            idx += 1 if done else -1

            if not done:
                final_board[cur_row][cur_col] = 0

        return final_board


sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]]

prob = Solve(sudoku)

print(prob.solve())
