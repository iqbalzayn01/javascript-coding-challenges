// function formingMagicSquare(s) {
//   let arr = [];
//   let duplicateNum = [];
//   let cost = 0;

//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < s.length; j++) {
//       arr.push(s[i][j]);

//       if (arr[i] === s[i][j]) {
//         duplicateNum.push(s[i][j]);
//       }
//     }
//   }

//   console.log('ARRAY: ', arr);
//   console.log('DUPLICATE: ', duplicateNum);
// }

// formingMagicSquare([
//   [5, 3, 4],
//   [1, 5, 8],
//   [6, 4, 2],
// ]);

// function formingMagicSquare(s) {
//   const magicSquares = getMagicSquares(3);
//   const distances = getDistances(magicSquares, s);

//   return distances.sort((a, b) => a - b)[0];
// }

// formingMagicSquare([
//   [5, 3, 4],
//   [1, 5, 8],
//   [6, 4, 2],
// ]);

// function getMagicSquares(n) {
//   const evenNumbersPermutations = getAllPermutations([2, 4, 6, 8]);
//   const squares = {};

//   let i = 0,
//     j = 0,
//     length = evenNumbersPermutations.length,
//     magicK = 15;
//   for (let id = 0; id < length; id++) {
//     squares[id] = [[], [], []];
//     let A = squares[id],
//       evenNumbers = evenNumbersPermutations[id];

//     A[1][1] = 5;

//     A[i][j] = evenNumbers[0];
//     A[i][j + 2] = evenNumbers[1];
//     A[i + 2][j] = evenNumbers[2];
//     A[i + 2][j + 2] = evenNumbers[3];

//     A[i][j + 1] = magicK - (A[i][j] + A[i][j + 2]);
//     A[i + 1][j] = magicK - (A[i][j] + A[i + 2][j]);
//     A[i + 1][j + 2] = magicK - (A[i][j + 2] + A[i + 2][j + 2]);
//     A[i + 2][j + 1] = magicK - (A[i][j + 1] + A[i + 1][j + 1]);
//   }

//   return Object.keys(squares).reduce(isAMagicSquare, squares);
// }

// function isAMagicSquare(squares, key) {
//   const current = squares[key],
//     magicK = 15;

//   if (
//     current[0].reduce((a, b) => a + b) !== magicK ||
//     current[1].reduce((a, b) => a + b) !== magicK ||
//     current[2].reduce((a, b) => a + b) !== magicK ||
//     current[0][0] + current[1][0] + current[2][0] !== magicK ||
//     current[0][1] + current[1][1] + current[2][1] !== magicK ||
//     current[0][2] + current[1][2] + current[2][2] !== magicK ||
//     current[0][0] + current[1][1] + current[2][2] !== magicK
//   ) {
//     delete squares[key];
//   }

//   return squares;
// }

// function getDistances(magicSquares, square) {
//   return Object.keys(magicSquares).reduce((distances, key) => {
//     distances.push(getDistance(magicSquares[key], square));
//     return distances;
//   }, []);
// }

// function getDistance(magicSquare, square) {
//   const length = magicSquare.length;
//   let distance = 0;

//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       distance += Math.abs(magicSquare[i][j] - square[i][j]);
//     }
//   }

//   return distance;
// }

function formingMagicSquare(s) {
  // All 8 possible 3x3 magic squares using digits 1-9
  const possibleMagicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Number.MAX_SAFE_INTEGER;

  // Iterate through each possible magic square
  for (let i = 0; i < possibleMagicSquares.length; i++) {
    let currentCost = 0;
    const magicSquare = possibleMagicSquares[i];

    // Calculate the cost to transform the input 's' into the current magic square
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        currentCost += Math.abs(s[row][col] - magicSquare[row][col]);
      }
    }

    // Update the minimum cost if the current one is lower
    if (currentCost < minCost) {
      minCost = currentCost;
    }
  }

  return console.log(minCost);
}

formingMagicSquare([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
]);
