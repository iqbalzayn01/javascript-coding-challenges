// export function openOrSenior(data: number[][]): string[] {
//   const result: string[] = [];
//   for (let i = 0; i < data.length; i++) {
//     const age = data[i][0];
//     const handicap = data[i][1];

//     if (age >= 55 && handicap > 7) {
//       result.push('Senior');
//     } else {
//       result.push('Open');
//     }
//   }

//   return result;
// }

// Method 2

export function openOrSenior(data: number[][]): string[] {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? 'Senior' : 'Open',
  );
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ]),
);
