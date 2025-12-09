let countSheep = (num) => {
  let count = [];

  for (let i = 1; i <= num; i++) {
    count.push(`${i} sheep...`);
  }

  const sheeps = count.join('');

  return sheeps;
};

console.log(countSheep(30));
