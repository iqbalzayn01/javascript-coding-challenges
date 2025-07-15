// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// parseInt() adalah fungsi yang mengubah string menjadi bilangan bulat (integer) sesuai dengan basis bilangan yang diberikan.

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2);
  // return arr.join('');
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
