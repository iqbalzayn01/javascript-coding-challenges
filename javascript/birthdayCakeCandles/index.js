function birthdayCakecandles(candles) {
  let highestCandle = 0;
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    let currentCandle = candles[i];

    if (currentCandle > highestCandle) {
      highestCandle = currentCandle;
      count = 1;
    } else if (currentCandle === highestCandle) {
      count++;
    }
  }

  return console.log(count);
}

birthdayCakecandles([3, 1, 3, 2]);

// Not Optimal
// function birthdayCakecandles(candles) {
//   const sorted = candles.sort((a, b) => a - b);

//   const highestCandle = sorted.length > 0 ? Math.max(...sorted) : null;
//   const count =
//     highestCandle !== null
//       ? sorted.filter((num) => num === highestCandle).length
//       : 0;

//   return console.log(
//     `Highest Candle: ${highestCandle} & Total Highest Candle: ${count}`
//   );
// }
