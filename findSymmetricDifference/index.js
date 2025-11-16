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
