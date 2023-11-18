// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to O.

// S=O(n), we could optimize that by proceding each row and col and registering the row by setting 0 tp the first value, and then replacing all the values for the rows starting with 0
function zeroMatrix(matrix) {
  let zeros = [];

  for (let row in matrix) {
    for (let col in matrix[0]) {
      if (matrix[row][col] === 0) {
        zeros.push([row, col]);
      }
    }
  }

  for (let [y, x] of zeros) {
    matrix = fillZeros(matrix, y, x);
  }

  return matrix;
}

function fillZeros(matrix, y, x) {
  matrix = fillCol(matrix, x);
  matrix = fillRow(matrix, y);

  return matrix;
}

function fillRow(matrix, y) {
  const width = matrix[0].length;
  for (let i = 0; i < width; i++) {
    matrix[y][i] = 0;
  }
  return matrix;
}
function fillCol(matrix, x) {
  const height = matrix.length;
  for (let i = 0; i < height; i++) {
    matrix[i][x] = 0;
  }
  return matrix;
}

// tests

const matrixTest = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

const matrixExpected = [
  [0, 1, 0, 1, 1],
  [0, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1],
  [0, 1, 0, 1, 1],
];

console.assert(
  areMatricesEqual(zeroMatrix(matrixTest), matrixExpected),
  "test1"
);

function areMatricesEqual(matrix1, matrix2) {
  // Check if both are arrays
  if (!Array.isArray(matrix1) || !Array.isArray(matrix2)) {
    return false;
  }

  // Check if both matrices have the same number of rows
  if (matrix1.length !== matrix2.length) {
    return false;
  }

  // Loop through rows
  for (let i = 0; i < matrix1.length; i++) {
    // Check if each row is an array and has the same length
    if (
      !Array.isArray(matrix1[i]) ||
      !Array.isArray(matrix2[i]) ||
      matrix1[i].length !== matrix2[i].length
    ) {
      return false;
    }

    // Loop through columns
    for (let j = 0; j < matrix1[i].length; j++) {
      // Compare corresponding elements
      if (matrix1[i][j] !== matrix2[i][j]) {
        return false;
      }
    }
  }

  return true;
}
