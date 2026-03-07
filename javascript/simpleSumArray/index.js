function simpleSumArr(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(simpleSumArr([1, 2, 3, 4, 10, 11]));
