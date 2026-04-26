export function hoopCount(n: number): string {
  if (n < 10) {
    return 'Keep at it until you get it';
  }

  return 'Great, now move on to tricks';
}

console.log(hoopCount(9));
