function minMaxSum(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const minSum = sortedArr.slice(0, 4).reduce((acc, val) => acc + val, 0);
  const maxSum = sortedArr.slice(-4).reduce((acc, val) => acc + val, 0);

  return console.log(minSum, maxSum);
}

minMaxSum([1, 3, 5, 7, 9]);
minMaxSum([1, 2, 3, 4, 5]);
minMaxSum([7, 69, 2, 221, 8974]);
