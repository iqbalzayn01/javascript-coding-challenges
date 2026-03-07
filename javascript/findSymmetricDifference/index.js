function sym(...args) {
  args[0] = new Set(args[0]);
  const diff = args.reduce((acc, cur) => {
    const prevNums = new Set();
    cur.forEach((e) => {
      if (prevNums.has(e)) return;

      acc.has(e) ? acc.delete(e) : acc.add(e);
      prevNums.add(e);
    });
    return acc;
  });
  return [...diff];
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));

// Alternative solution
// function sym(...args) {
//   const reduceResult = args.reduce(getSymDifference);

//   const uniqueResult = [...new Set(reduceResult)];
//   const sortedResult = uniqueResult.sort((a, b) => a - b);

//   return sortedResult;
// }

// function getSymDifference(arrA, arrB) {
//   const setA = new Set(arrA);
//   const setB = new Set(arrB);
//   const result = [];

//   for (const element of setA) {
//     if (!setB.has(element)) {
//       result.push(element);
//     }
//   }

//   for (const element of setB) {
//     if (!setA.has(element)) {
//       result.push(element);
//     }
//   }

//   return result;
// }

// console.log(sym([1, 2, 3], [2, 3, 4]));
