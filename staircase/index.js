function staircase(n) {
  for (let i = 0; i < n; i++) {
    let step = '';

    for (let j = 0; j < n; j++) {
      if (j < n - 1 - i) {
        step += ' ';
      } else {
        step += '#';
      }
    }

    console.log(step);
  }
}

staircase(6);
