function transposeMatrixAndPrint(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const transposedMatrix = [];

  for (let j = 0; j < numCols; j++) {
    transposedMatrix[j] = [];
    for (let i = 0; i < numRows; i++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  console.log("Transposed matrix:");
  console.log(transposedMatrix);
}

