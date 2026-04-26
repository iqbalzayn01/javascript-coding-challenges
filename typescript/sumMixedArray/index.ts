export function sumMix(x: any[]): number {
  const numArr: number[] = x.map((str) => parseInt(str, 10));

  const result: number = numArr.reduce((acc, curr) => acc + curr, 0);

  return result;
}

console.log(sumMix([9, 3, '7', '3']));
