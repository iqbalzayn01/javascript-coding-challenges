// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  const reverseStr = (str) =>
    str
      .split(' ')
      .map((word) => word.split('').reverse().join(''))
      .join(' ');
  console.log(reverseStr(str));
}

reverseWords('Hello World');
