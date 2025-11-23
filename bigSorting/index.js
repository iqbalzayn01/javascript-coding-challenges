function bigSorting(unsorted) {
  const result = unsorted.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
  });

  return console.log(result);
}

bigSorting([6, 31415926535897932384626433832795, 1, 3, 10, 3, 5]);
