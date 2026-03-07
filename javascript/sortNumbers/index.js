// Finish the sollution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function sollution(nums) {
  // return nums ? nums.sort((a, b) => a - b) : [];
  if (nums === null) return [];
  return nums.sort((a, b) => a - b);
}

console.log(
  sollution([
    9, -97, -74, -60, -65, -24, 6, -21, 49, -72, 90, 12, -7, 83, 72, -57, 33,
    -3, -42, 93, -51, 11, -48, -98, 37, 2, 32, -5, -13, -47, 64, 7,
  ])
);
