export function validateBase(num: string, base: number): boolean {
  //   Method 1
  return [...num].every((char) => {
    const val = parseInt(char, 36);
    return !isNaN(val) && val < base;
  });

  //   Methode 2
  //   return new RegExp(
  //     `^[${'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base)}]+$`,
  //     'g',
  //   ).test(num);
}

console.log(validateBase('61262', 8));
console.log(validateBase('ABCDEF', 16));
