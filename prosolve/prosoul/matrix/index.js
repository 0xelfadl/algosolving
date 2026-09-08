//this is a good problem to solve matrix spiral this is a solution but try to do by your own and then compare with this solution
function matrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i][j] = undefined;
    }
  }
  let startrow = 0;
  let endrow = n - 1;
  let startcol = 0;
  let endcol = n - 1;
  let k = 1;
  while (k <= n * n) {
    for (let j = startcol; j < endcol + 1; j++) {
      matrix[startrow][j] = k;
      k++;
    }
    startrow++;
    for (let i = startrow; i < endrow + 1; i++) {
      matrix[i][endcol] = k;
      k++;
    }
    endcol--;
    if (startrow <= endrow) {
      for (let j = endcol; j >= startcol; j--) {
        matrix[endrow][j] = k;
        k++;
      }
    }
    endrow--;
    if (startcol <= endcol) {
      for (let i = endrow; i >= startrow; i--) {
        matrix[i][startcol] = k;
        k++;
      }
    }
    startcol++;
  }
  return matrix;
}
module.exports = matrix;