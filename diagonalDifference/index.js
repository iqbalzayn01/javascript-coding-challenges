const diagonalDifference = (arr) => {
  let n = arr.length;
  let [arr1, arr2] = [0, 0];

  for (let i = 0; i < n; i++) {
    arr1 += arr[i][i];
    arr2 += arr[i][n - 1 - i];
  }

  return Math.abs(arr1 - arr2);
};

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
