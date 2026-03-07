// Given a non-empty array of integers, return the result of multiplying the values together in order.

// method 1:
// function grow(x) {
//   let result = 1;
//   for (let num of x) {
//     result *= num;
//   }

//   return result;
// }

// console.log(grow([2, 2, 2, 2, 2, 2]));

// method 2:using reduce

// reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

function grow(x) {
  return x.reduce((accumulator, current) => accumulator + current, 1);
}

console.log(grow([1, 2, 3, 4]));
