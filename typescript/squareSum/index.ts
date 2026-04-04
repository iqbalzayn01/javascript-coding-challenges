export function squareSum(numbers: number[]): number {
  let sum: number = 0;

  // methode 1
  //   for (let i = 0; i < numbers.length; i++) {
  //     const square: number = numbers[i] ** 2;
  //     sum += square;
  //   }

  //  methode 2
  for (const num of numbers) {
    sum += num ** 2;
  }

  //   methode 3
  // return numbers.reduce((sum, current) => sum + (current ** 2), 0)

  return sum;
}

console.log(squareSum([1, 2, 2]));
