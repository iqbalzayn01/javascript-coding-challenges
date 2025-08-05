// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// Method 1
// function smash(words) {
//   const str = words.join(' ');

//   return console.log(str);
// }

// Method 2
// function smash(words) {
//   const str = words.toString();
//   const newStr = str.replace(/,/g, ' ');

//   return console.log(newStr);
// }

smash(['hello', 'world', 'this', 'is', 'great']);
