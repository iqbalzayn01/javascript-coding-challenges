// Find The Middle Element

function gimme(triplet) {
  const sorted = triplet.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(triplet.length / 2);
  const middleValue = sorted[middleIndex];

  return triplet.indexOf(middleValue);
}

console.log(gimme([2, 3, 1]));
