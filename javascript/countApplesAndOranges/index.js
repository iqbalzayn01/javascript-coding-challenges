// S = integer, starting point of Sam's house location.
// t = integer, ending location of Sam's house location.
// a = integer, location of the Apple tree.
// b = integer, location of the Orange tree.
// apples = integer array, distances at which each apple falls from the tree.
// oranges = integer array, distances at which each orange falls from the tree.

// Output Format
// Print two integers on two different lines:
// The first integer: the number of apples that fall on Sam's house.
// The second integer: the number of oranges that fall on Sam's house.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let [appleCount, orangeCount] = [0, 0];

  for (let i = 0; i < apples.length; i++) {
    let xApple = a + apples[i];

    if (xApple >= s && xApple <= t) {
      appleCount++;
    }
  }

  for (let j = 0; j < oranges.length; j++) {
    let xOrange = b + oranges[j];

    if (xOrange >= s && xOrange <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
