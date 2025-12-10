// Description
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let chars = '';

  for (let i = 0; i < str.length; i++) {
    chars += str[i] + str[i];
  }

  return chars;
}

console.log(doubleChar('String'));
