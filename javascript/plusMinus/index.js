function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  arr.forEach((num) => {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });

  let total = arr.length;
  console.log(
    `${(positiveCount / total).toFixed(6)}, ${(negativeCount / total).toFixed(
      6
    )}, ${(zeroCount / total).toFixed(6)}`
  );
}

plusMinus([1, 1, 0, -1, -1]);
