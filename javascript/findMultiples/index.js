function findMultiples(integer, limit) {
  let listOfMultiples = [];

  for (let i = integer; i <= limit; i += integer) {
    listOfMultiples.push(i);
  }

  return listOfMultiples;
}

console.log(findMultiples(2, 6));
