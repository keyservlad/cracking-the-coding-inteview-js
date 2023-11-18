// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. (an you do this in place?


// o(n2) cant do better as we have to go over all the squares, tricky part is the offset
function rotateMatrix(matrix) {
  const n = matrix[0].length;
  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer;
    const last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i];

      // left --> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom --> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right --> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top --> right
      matrix[i][last] = top;
    }
  }
  return matrix;
}

// test

const matrixTest = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const resultExpected = [
  [21, 16, 11, 6, 1],
  [22, 17, 12, 7, 2],
  [23, 18, 13, 8, 3],
  [24, 19, 14, 9, 4],
  [25, 20, 15, 10, 5],
];

// console.table(rotateMatrix(matrixTest));
console.assert(
  areMatricesEqual(rotateMatrix(matrixTest), resultExpected),
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
