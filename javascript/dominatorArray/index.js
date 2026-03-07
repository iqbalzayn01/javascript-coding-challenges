// function dominator(arr) {
//   const halfOfElement = arr.length / 2;
//   const mostFrequent = Array.from(new Set(arr)).reduce((prev, curr) =>
//     arr.filter((el) => el === curr).length >
//     arr.filter((el) => el === prev).length
//       ? curr
//       : prev,
//   );

//   let m = new Map();
//   let maxCount = 0;

//   for (let num of arr) {
//     let count = (m.get(num) || 0) + 1;
//     m.set(num, count);

//     if (count > maxCount) {
//       maxCount = count;
//     }
//   }

//   if (maxCount > halfOfElement) {
//     return mostFrequent;
//   } else {
//     return -1;
//   }
// }

function dominator(arr) {
  if (arr.length === 0) return -1;

  const halfOfElement = arr.length / 2;
  const map = new Map();

  for (let num of arr) {
    let count = (map.get(num) || 0) + 1;
    map.set(num, count);

    if (count > halfOfElement) return num;
  }

  return -1;
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]));
