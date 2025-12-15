// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Methode 1
// function reverse(string) {
//   const words = string.split(' ').reverse().join(' ');

//   return words;
// }

// Methode 2
const reverse = (string) => string.split(' ').reverse().join(' ');

console.log(reverse('Hello World'));
console.log(reverse('Hi There.'));
