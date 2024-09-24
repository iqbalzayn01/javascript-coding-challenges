// Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Function Declaration yaitu "getCount" yang menerima satu parameter "str"
//
function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  const count = [...str].reduce((acc, char) => {
    if (vowels.includes(char.toLowerCase())) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return count;
}

console.log(getCount("o a kak ushakov lil vo"));
console.log(getCount("Bicara Itu Ada Seninya"));
