function compareTriplets(a, b) {
  let [alice, bob] = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    } else {
      continue;
    }
  }

  return [alice, bob];
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
