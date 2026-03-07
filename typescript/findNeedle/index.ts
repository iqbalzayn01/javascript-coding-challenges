function findNeedle(haystack: any[]): string | undefined {
  const position = haystack.indexOf('needle');

  if (position !== -1) {
    return `found the needle at position ${position}`;
  }

  //   for (let i = 0; i < haystack.length; i++) {
  //     if (haystack[i] === 'needle') {
  //       return `found the needle at position ${i}`;
  //     }
  //   }

  return 'needle not found';
}

// Input
console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']),
);
console.log(
  findNeedle([
    '3',
    '123124234',
    null,
    'needle',
    'world',
    'hay',
    2,
    '3',
    true,
    false,
  ]),
);
console.log(findNeedle([1, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4]));
console.log(
  findNeedle([
    '283497238987234',
    'a dog',
    'a cat',
    'some random junk',
    'a piece of hay',
    'needle',
    'something somebody lost a while ago',
  ]),
);

// Output
('found the needle at position 5');
