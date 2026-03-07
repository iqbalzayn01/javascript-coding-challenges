function numberLineJumps(x1, v1, x2, v2) {
  if (v1 <= v2) {
    return 'NO';
  }

  if ((x2 - x1) % (v1 - v2) === 0) {
    return 'YES';
  } else {
    return 'NO';
  }
}

console.log(numberLineJumps(0, 3, 4, 2));
