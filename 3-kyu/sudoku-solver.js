const sudoku = (puzzle) => {
  solveSudoku(puzzle, 0, 0);
  return puzzle;
};

const solveSudoku = (puzzle, row, col) => {
  if (col === puzzle.length) {
    col = 0;
    row++;
    if (row === puzzle.length) {
      return true;
    }
  }

  if (puzzle[row][col] === 0) {
    for (let num = 1; num <= 9; num++) {
      if (isValid(puzzle, row, col, num)) {
        puzzle[row][col] = num;
        if (solveSudoku(puzzle, row, col + 1)) {
          return true;
        }
      }
    }
    puzzle[row][col] = 0;
    return false;
  } else {
    return solveSudoku(puzzle, row, col + 1);
  }
};

const isValid = (puzzle, row, col, num) => {
  const subgridRow = Math.floor(row / 3) * 3;
  const subgridCol = Math.floor(col / 3) * 3;

  for (let val of puzzle[row]) {
    if (val === num) {
      return false;
    }
  }

  for (let rowArr of puzzle) {
    if (rowArr[col] === num) {
      return false;
    }
  }

  for (let row of puzzle.slice(subgridRow, subgridRow + 3)) {
    for (let val of row.slice(subgridCol, subgridCol + 3)) {
      if (val === num) {
        return false;
      }
    }
  }

  return true;
};
