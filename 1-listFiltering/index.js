// Membuat sebuah fungsi yang menerima input berupa list
// berisi bilangan bulat non-negatif dan string, lalu mengembalikan
// list baru dengan string yang sudah difilter.

//  #tag LISTS FILTERING DATA_STRUCTURES FUNDAMENTALS

// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

// Cara 1
function filter_list(l) {
  return console.log(l.filter((x) => typeof x === "number"));
}

console.log(filter_list([1, 2, "a", "b"], "[3, 4]"));
console.log(filter_list([1, "a", "b", 0, 15]));

// Cara 2
function isNumber(x) {
  return typeof x === "number";
}

function filter_list2(l) {
  return l.filter(isNumber);
}

console.log(filter_list2([1, 2, "a", "b"], [1, 2], 'For input [1,2,"a","b"]'));
console.log(filter_list2([1, "a", "b", 0, 15]));
